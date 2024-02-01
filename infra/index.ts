import * as cloudflare from '@pulumi/cloudflare';
import * as github from '@pulumi/github';

const accountId = '2fdb0acf0b64d82ce66e86c9b8165d05';

const zoneDomainsToIdsMap = {
  'surfacetoair.ca': '14cd97bfef0de624efdc9544eb6721fe',
  'surface2air.band': '9f4e0f1fcf84ec6ef08fb627f8576409',
  's2a.ca': 'ddff1f1d99fa5661d4e98c05edfa4c03',
  's2a.band': '2a0316be89ed8e61ec6e7be704142ff5',
};

// The actual site
const mainZoneId = '9152b0b6ba4a692c080a6a8840881e9f';

// Redirect all secondary domains to the main one, including www.*
for (const [domain, zoneId] of Object.entries(zoneDomainsToIdsMap)) {
  // Create a DNS A record with a dummy IP (required for page rule to work)
  new cloudflare.Record(`redirectWWW - ${domain}`, {
    zoneId,
    name: domain,
    type: 'A',
    value: '192.0.2.1', // Use a dummy IP, as this won't be used because of the redirect
    ttl: 1, // Shortest possible TTL
    proxied: true, // Ensure the traffic goes through Cloudflare
    comment: 'IP is a dummy IP',
  });

  // Set up the page rule for the redirect
  new cloudflare.PageRule(`redirectToMainSite - ${domain}`, {
    zoneId,
    target: `${domain}/*`,
    actions: {
      forwardingUrl: {
        url: 'https://surfacetoair.band/$1', // The destination URL for redirects
        statusCode: 301, // Permanent redirect; use 302 for temporary
      },
    },
  });
}

// Create a DNS CNAME record for the www subdomain to point to surfacetoair.band
new cloudflare.Record('wwwCNAME - main site', {
  zoneId: mainZoneId,
  name: 'www',
  type: 'CNAME',
  value: 'surfacetoair.band', // The value is the root domain
  ttl: 1, // Shortest possible TTL
  proxied: true, // Ensure the traffic goes through Cloudflare
});

// Set up the page rule for the www subdomain redirect
new cloudflare.PageRule('redirectWWW - main site', {
  zoneId: mainZoneId,
  target: 'www.surfacetoair.band/*',
  actions: {
    forwardingUrl: {
      url: 'https://surfacetoair.band/$1', // The $1 represents the path captured by *
      statusCode: 301, // Permanent redirect; use 302 for temporary
    },
  },
});

new cloudflare.Record('pages cname - main site', {
  zoneId: mainZoneId,
  name: 'surfacetoair.band',
  type: 'CNAME',
  value: 'surface-to-air-site.pages.dev',
  proxied: true,
});

new cloudflare.Record('keybase-verification', {
  zoneId: mainZoneId,
  name: 'surfacetoair.band',
  type: 'TXT',
  value:
    'keybase-site-verification=Ci2tSpVfVELBVWfKGLD8I5hKk6HeN3Mi8AwxUtpBW34',
  proxied: false,
});

new cloudflare.PagesProject('pages-deployment', {
  accountId,
  name: 'surface-to-air-site',
  productionBranch: 'main',
  source: {
    config: {
      owner: 'martypenner',
      deploymentsEnabled: true,
      prCommentsEnabled: true,
      previewBranchExcludes: ['main'],
      previewBranchIncludes: ['dev', 'preview'],
      previewDeploymentSetting: 'custom',
      productionBranch: 'main',
      productionDeploymentEnabled: true,
      repoName: 'surface-2-air-site',
    },
    type: 'github',
  },
});

new cloudflare.PagesDomain('pages-site', {
  accountId,
  domain: 'surfacetoair.band',
  projectName: 'surface-to-air-site',
});

new github.Repository(
  'repo',
  {
    name: 'surface-2-air-site',
    description:
      'The official website of Surface 2 Air (migrated from an old drupal 6 installation)',
    visibility: 'public',
    hasDownloads: true,
    hasIssues: true,
    hasProjects: true,
    hasWiki: true,
    homepageUrl: 'https://surfacetoair.band',
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
