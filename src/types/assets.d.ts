// Allow importing static asset types like PDFs in TypeScript
declare module "*.pdf" {
  const src: string;
  export default src;
}
