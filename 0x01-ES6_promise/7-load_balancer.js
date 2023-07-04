export default function loadBalancer(chinaDownload, USDownload) {
  // Promise.any() will also provide the answer in this context.
  return Promise.race([chinaDownload, USDownload]);
}
