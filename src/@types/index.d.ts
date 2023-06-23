 // eslint-disable-next-line no-useless-escape
declare module "\*.svg" {
    import React = require("react");
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }
  // eslint-disable-next-line no-useless-escape
  declare module "\*.jpg" {
    const content: string;
    export default content;
  }
   // eslint-disable-next-line no-useless-escape
  declare module "\*.png" {
    const content: string;
    export default content;
  }
   // eslint-disable-next-line no-useless-escape
  declare module "\*.json" {
    const content: string;
    export default content;
  }