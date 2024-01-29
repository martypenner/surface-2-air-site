import type { SSTConfig } from 'sst';
import {
  Certificate,
  CertificateValidation,
} from 'aws-cdk-lib/aws-certificatemanager';
import { RemixSite } from 'sst/constructs';
import { RemovalPolicy } from 'aws-cdk-lib/core';

export default {
  config(_input) {
    return {
      name: 'surface-to-air-site',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const certificate = new Certificate(this, 'Certificate', {
        domainName: '*.surfacetoair.band',
        subjectAlternativeNames: ['surfacetoair.band'],
        validation: CertificateValidation.fromDns(),
      });
      if (stack.stage === 'prod') {
        certificate.applyRemovalPolicy(RemovalPolicy.RETAIN);
      }

      const site = new RemixSite(stack, 'site', {
        customDomain: {
          domainName: 'surfacetoair.band',
          isExternalDomain: true,
          cdk: {
            certificate,
          },
        },
      });

      stack.addOutputs({
        url: site.url,
      });
    });

    app.setDefaultRemovalPolicy('destroy');
  },
} satisfies SSTConfig;
