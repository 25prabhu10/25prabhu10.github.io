import{_ as e,c as o,a2 as t,o as l}from"./chunks/framework.Dtz5kk4D.js";const p=JSON.parse('{"title":"AWS CloudFront","description":"AWS CloudFront","frontmatter":{"title":"AWS CloudFront","description":"AWS CloudFront","prev":"./AWS"},"headers":[],"relativePath":"Concepts/AWS/AWS_CloudFront.md","filePath":"Concepts/AWS/AWS_CloudFront.md","lastUpdated":1661690200000}'),a={name:"Concepts/AWS/AWS_CloudFront.md"};function n(r,i,c,s,u,d){return l(),o("div",null,i[0]||(i[0]=[t('<h1 id="aws-cloudfront" tabindex="-1">AWS CloudFront <a class="header-anchor" href="#aws-cloudfront" aria-label="Permalink to &quot;AWS CloudFront&quot;">​</a></h1><ul><li>Content Delivery Network (CDN)</li><li>Improves read performance, content is cached at the edge</li><li>216 Point of Presence globally (edge locations)</li><li>DDoS protection, integration with Shield, AWS Web Application Firewall</li><li>Can expose external HTTPS and can talk to internal HTTPS backends</li></ul><h2 id="cloudfront-origins" tabindex="-1">CloudFront - Origins <a class="header-anchor" href="#cloudfront-origins" aria-label="Permalink to &quot;CloudFront - Origins&quot;">​</a></h2><ul><li>S3 bucket <ul><li>For distributing files and caching them at the edge</li><li>Enhanced security with CloudFront Origin Access Identity (OAI)</li><li>CloudFront can be used as an ingress (to upload files to S3)</li></ul></li><li>Custom Origin (HTTP) <ul><li>Application Load Balancer</li><li>EC2 instance</li><li>S3 website (must first enable the bucket as a static S3 website)</li><li>Any HTTP backend you want</li></ul></li></ul><h2 id="cloudfront-vs-s3-cross-region-replication" tabindex="-1">CloudFront vs S3 Cross Region Replication <a class="header-anchor" href="#cloudfront-vs-s3-cross-region-replication" aria-label="Permalink to &quot;CloudFront vs S3 Cross Region Replication&quot;">​</a></h2><ul><li>CloudFront: <ul><li>Global Edge network</li><li>Files are cached for a TTL (maybe a day)</li><li>Great for static content that must be available everywhere</li></ul></li><li>S3 Cross Region Replication: <ul><li>Must be setup for each region you want replication to happen</li><li>Files are updated in near real-time</li><li>Read only</li><li>Great for dynamic content that needs to be available at low-latency in few regions</li></ul></li></ul><h2 id="cloudfront-caching" tabindex="-1">CloudFront Caching <a class="header-anchor" href="#cloudfront-caching" aria-label="Permalink to &quot;CloudFront Caching&quot;">​</a></h2><ul><li>Cache based on <ul><li>Headers</li><li>Session Cookies</li><li>Query String Parameters</li></ul></li><li>The cache lives at each CloudFront Edge Location</li><li>You want to maximize the cache hit rate to minimize requests on the origin</li><li>Control the TTL (0 seconds to 1 year), can be set by the origin using the Cache-Control header, Expires header...</li><li>You can invalidate part of the cache using the CreateInvalidation API</li></ul><h2 id="create-cloudfront" tabindex="-1">Create CloudFront <a class="header-anchor" href="#create-cloudfront" aria-label="Permalink to &quot;Create CloudFront&quot;">​</a></h2><p>Steps:</p><ol><li><p>Goto CloudFront</p></li><li><p>Create Distribution:</p><ul><li>Origin: <ul><li>Origin domain: (your S3 bucket)</li><li>Origin path (optional):</li><li>S3 bucket access: (...public access) (...restrict access to only CloudFront)</li><li>Origin access identity (OAI):</li><li>Bucket policy: (No, update manually) (Yes, update bucket policy for this OAI)</li></ul></li></ul></li><li><p>You can access the CloudFront using the URL defined in the domain name column</p></li></ol><h2 id="cloudfront-geo-restriction" tabindex="-1">CloudFront Geo Restriction <a class="header-anchor" href="#cloudfront-geo-restriction" aria-label="Permalink to &quot;CloudFront Geo Restriction&quot;">​</a></h2><ul><li>You can restrict who can access your distribution <ul><li>Whitelist: Allow your users to access your content only if they&#39;re in one of the countries on a list of approved countries.</li><li>Blacklist: Prevent your users from accessing your content if they&#39;re in one of the countries on a blacklist of banned countries.</li></ul></li><li>The &quot;country&quot; is determined using a 3rd party Geo-IP database</li><li>Use case: Copyright Laws to control access to content</li></ul><h2 id="cloudfront-and-https" tabindex="-1">CloudFront and HTTPS <a class="header-anchor" href="#cloudfront-and-https" aria-label="Permalink to &quot;CloudFront and HTTPS&quot;">​</a></h2><ul><li>Viewer Protocol Policy: <ul><li>Redirect HTTP to HTTPS</li><li>Or use HTTPS only</li></ul></li><li>Origin Protocol Policy (HTTP or S3): <ul><li>HTTPS only</li><li>Or Match Viewer (HTTP =&gt; HTTP &amp; HTTPS =&gt; HTTPS)</li></ul></li><li>Note: <ul><li>S3 bucket &quot;websites&quot; don&#39;t support HTTPS</li></ul></li></ul>',15)]))}const C=e(a,[["render",n]]);export{p as __pageData,C as default};