// Import basic demos
import {
  axiosConfigDemo,
  axiosUrlConfigDemo,
  axiosMethodDemo,
  axiosInstanceDemo,
  axiosInstanceCreateDemo,
  axiosInstanceComparisonDemo,
} from './1-basic-use/basic-demos.js';
// Import encode demos
import {
  axiosAutoEncodeParams,
  axiosParamsInUrl,
} from './2-encode/axios-demo.js';
import {
  fetchWithoutEncode,
  fetchManualEncode,
} from './2-encode/fetch-demo.js';
import {
  axiosBlobResponse,
  axiosJsonResponse,
  axiosPostJson,
  axiosInvalidJsonResponse,
} from './3-transformReqRes/axios-demo.js';
import {
  fetchBlobResponse,
  fetchJsonResponse,
  fetchPostJson,
} from './3-transformReqRes/fetch-demo.js';
import {
  axiosSuccessResponse,
  axiosNotFoundError,
  axiosServerError,
} from './4-errorHandling/axios-demo.js';
import {
  fetchSuccessResponse,
  fetchNotFoundError,
  fetchServerError,
} from './4-errorHandling/fetch-demo.js';
// Import TypeScript demo
import { axiosTypeScriptDemo } from './1-basic-use/typescript-demos.ts';

const demos = {
  // Encode demos
  axiosAutoEncodeParams,
  axiosParamsInUrl,
  fetchWithoutEncode,
  fetchManualEncode,

  // Basic demos
  axiosConfigDemo,
  axiosUrlConfigDemo,
  axiosMethodDemo,
  axiosInstanceDemo,
  axiosInstanceCreateDemo,
  axiosInstanceComparisonDemo,

  // TypeScript demo
  axiosTypeScriptDemo,

  // Transform Request & Response demos
  axiosPostJson,
  fetchPostJson,
  axiosJsonResponse,
  axiosBlobResponse,
  axiosInvalidJsonResponse,
  fetchJsonResponse,
  fetchBlobResponse,

  // Error Handling demos
  axiosSuccessResponse,
  axiosNotFoundError,
  axiosServerError,
  fetchSuccessResponse,
  fetchNotFoundError,
  fetchServerError,
};

document.querySelectorAll('.demo-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const demoName = button.dataset.demo;
    if (demos[demoName]) {
      // Remove active class from all buttons
      document
        .querySelectorAll('.demo-btn')
        .forEach((btn) => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      // Clear previous console outputs
      console.clear();
      // Run the demo
      demos[demoName]();
    }
  });
});
