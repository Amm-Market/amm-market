# Security Policy

Avana takes security seriously. If you believe you have found a vulnerability affecting Avana smart contracts, protocol infrastructure, liquidation systems, oracle integrations, frontend code, or developer tooling, please report it privately and responsibly.

Do not disclose vulnerabilities publicly until the issue has been reviewed and a fix or mitigation has been deployed.

## Supported Versions

Avana will provide security updates for the most recent maintained releases and active production deployments.

| Version / Release Line        | Supported |
| ----------------------------- | --------- |
| Current main branch / latest release | ✅ |
| Previous maintained release   | ✅ |
| Deprecated or archived releases | ❌ |
| Unofficial forks or modified deployments | ❌ |

If this repository is still in active development and has not reached a stable public release, only the latest default branch should be considered supported.

## Reporting a Vulnerability

Please report vulnerabilities through one of the private channels below:

- GitHub Private Vulnerability Reporting for this repository, if enabled
- Email: **security@avana.xyz**
- Security contact page: **https://avana.xyz/security**

If you do not yet have a dedicated security email or page, replace the contact details above before publishing this file.

## What to Include

To help us triage quickly, include as much of the following as possible:

- A clear description of the issue
- The affected repository, contract, component, or system
- Severity assessment and potential impact
- Steps to reproduce
- Proof of concept, test case, or transaction traces if available
- Chain, deployment address, commit hash, release tag, or environment involved
- Any suggested mitigation

Reports that are specific, reproducible, and scoped to real impact will be handled faster.

## Response Process

Avana will aim to follow this process for good faith reports:

- Acknowledge receipt within **72 hours**
- Complete initial triage within **7 business days**
- Provide status updates at least every **5 business days** while the issue is under review
- Coordinate remediation, validation, and disclosure depending on severity and exploitability

Response times may vary for low quality, non reproducible, or out of scope reports.

## Coordinated Disclosure

Please keep vulnerability details confidential until Avana has had a reasonable opportunity to investigate and remediate the issue.

Once a report is validated, Avana may:

- Develop and deploy a fix
- Coordinate disclosure timing with the reporter
- Publish a security advisory after remediation
- Credit the reporter, if desired and appropriate

If a report is declined, we will provide a brief explanation when possible. Reports may be declined if they are out of scope, not reproducible, require unrealistic assumptions, or do not create a meaningful security impact.

## Scope

This policy generally covers vulnerabilities in:

- Smart contracts maintained by Avana
- Liquidation and execution infrastructure maintained by Avana
- Oracle and pricing logic maintained by Avana
- Frontend and backend systems in this repository
- Developer tooling and scripts that affect production operations

The following are typically out of scope unless they lead to a concrete and demonstrable security impact on Avana users or protocol funds:

- Issues in third party dependencies without an Avana specific exploit path
- Best practice suggestions without an exploitable condition
- Theoretical attacks without a realistic threat model
- Social engineering attacks
- Denial of service requiring disproportionate resources
- Reports based only on missing headers, version banners, or generic scanner output
- Vulnerabilities in unofficial forks, mirrors, or downstream integrations not maintained by Avana

## Safe Harbor

Avana supports good faith security research intended to improve user safety and protocol resilience. When acting in good faith, we will not pursue action against researchers for:

- Testing in a way that avoids harm to users, funds, and protocol operations
- Maintaining confidentiality during the review process
- Avoiding privacy violations, data destruction, and service disruption
- Not exploiting the issue beyond what is necessary to demonstrate impact

Please do not access, modify, or exfiltrate user data. Do not perform mainnet testing that could put funds, markets, or users at risk.

## Bug Bounty

If Avana launches a formal bug bounty program, the terms, scope, rewards, and exclusions for that program will control over this policy where applicable.
