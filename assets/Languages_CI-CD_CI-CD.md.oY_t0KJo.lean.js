import{_ as i,c as n,a2 as o,o as t}from"./chunks/framework.Dtz5kk4D.js";const p=JSON.parse('{"title":"CI/CD","description":"Continuous Integration (CI) and (more often) Continuous Delivery or (less often) Continuous Deployment (CD)","frontmatter":{"title":"CI/CD","description":"Continuous Integration (CI) and (more often) Continuous Delivery or (less often) Continuous Deployment (CD)"},"headers":[],"relativePath":"Languages/CI-CD/CI-CD.md","filePath":"Languages/CI-CD/CI-CD.md","lastUpdated":1666469073000}'),l={name:"Languages/CI-CD/CI-CD.md"};function a(r,e,s,u,c,d){return t(),n("div",null,e[0]||(e[0]=[o('<h1 id="ci-cd" tabindex="-1">CI/CD <a class="header-anchor" href="#ci-cd" aria-label="Permalink to &quot;CI/CD&quot;">​</a></h1><p>CI/CD or CICD is the combined practices of continuous integration (CI) and (more often) continuous delivery or (less often) continuous deployment (CD)</p><ul><li>CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development</li></ul><h2 id="the-ideal-ci-cd-pipeline" tabindex="-1">The Ideal CI/CD Pipeline <a class="header-anchor" href="#the-ideal-ci-cd-pipeline" aria-label="Permalink to &quot;The Ideal CI/CD Pipeline&quot;">​</a></h2><ol><li><p>Source:</p><ul><li>Require X reviewers</li></ul></li><li><p>Build:</p><ul><li>Compile source and dependencies</li><li>Run unit tests</li><li>Check and enforce code coverage % (90+)</li></ul></li><li><p>Test Environment:</p><ul><li>Run Integration tests</li></ul></li><li><p>Staging Environment:</p></li><li><p>Prod Environment (1box) (10% traffic):</p><ul><li>Alarms on Errors, Latency, Key Business Metrics</li><li>Bake Period: 24 hours</li><li>Anomaly Detection</li><li>Error counts + Latency Breaches</li><li>Canary</li></ul></li><li><p>Prod Environment:</p><ul><li>Alarms on Errors, Latency, Key Business Metrics</li><li>Bake Period: 24 hours</li><li>Anomaly Detection</li><li>Error counts + Latency Breaches</li><li>Canary</li></ul></li></ol>',5)]))}const m=i(l,[["render",a]]);export{p as __pageData,m as default};