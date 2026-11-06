// Lessons that teach each study path step, as "subject/lesson" references.
// Index = step index in data/studyPaths.js roadmap.
const W = "web-development";
const P = "programming-languages";
const D = "database-sql";
const A = "data-structures-algorithms";
const C = "cloud-devops";

export const pathLessons = {
  "frontend-developer": [
    [`${W}/how-the-web-works`, `${W}/html-fundamentals`],
    [`${W}/css-fundamentals`, `${W}/css-layout-flexbox-grid`, `${W}/responsive-design`],
    [`${W}/javascript-basics`, `${W}/dom-and-events`, `${W}/async-javascript-fetch`],
    [`${W}/git-and-github`],
    [`${W}/react-fundamentals`],
    [`${W}/deploying-web-apps`],
  ],
  "backend-developer": [
    [`${P}/what-is-programming`, `${P}/variables-and-data-types`, `${P}/functions`],
    [`${W}/async-javascript-fetch`, `${W}/node-express-apis`],
    [`${W}/node-express-apis`],
    [`${D}/relational-databases`, `${D}/select-queries`, `${D}/joins`],
    [`computer-networks/network-security-basics`],
  ],
  "full-stack-developer": [
    [`${W}/how-the-web-works`, `${W}/html-fundamentals`, `${W}/css-fundamentals`],
    [`${W}/javascript-basics`, `${W}/dom-and-events`, `${W}/react-fundamentals`],
    [`${W}/node-express-apis`],
    [`${D}/relational-databases`, `${D}/joins`, `${D}/indexes-and-normalization`],
    [`${W}/git-and-github`, `${W}/deploying-web-apps`],
  ],
  javascript: [
    [`${W}/javascript-basics`],
    [`${P}/functions`, `${W}/javascript-basics`],
    [`${W}/dom-and-events`, `${P}/object-oriented-programming`],
    [`${W}/javascript-basics`],
    [`${W}/async-javascript-fetch`],
  ],
  react: [
    [`${W}/react-fundamentals`],
    [`${W}/dom-and-events`, `${W}/react-fundamentals`],
    [`${W}/react-fundamentals`],
    [`${W}/async-javascript-fetch`, `${W}/node-express-apis`],
    [`${W}/deploying-web-apps`],
  ],
  dsa: [
    [`${A}/big-o-notation`, `${A}/arrays-and-hash-maps`],
    [`${A}/arrays-and-hash-maps`, `${A}/stacks-queues-linked-lists`],
    [`${A}/stacks-queues-linked-lists`],
    [`${A}/recursion`],
    [`${A}/sorting-and-searching`],
  ],
  "database-sql": [
    [`${D}/relational-databases`],
    [`${D}/select-queries`, `${D}/insert-update-delete`],
    [`${D}/joins`],
    [`${D}/indexes-and-normalization`],
  ],
  "cloud-devops": [
    [`${C}/cloud-computing-basics`, `${C}/linux-command-line`],
    [`${W}/git-and-github`],
    [`${C}/docker-containers`],
    [`${C}/ci-cd-pipelines`, `${C}/monitoring-and-scaling`],
  ],
};
