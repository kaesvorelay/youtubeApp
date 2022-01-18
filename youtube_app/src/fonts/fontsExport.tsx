export function fontFace(
  name: string,
  src: string,
  fontWeight: number | string = "normal",
  fontStyle: string = "normal"
) {
  return `
      @font-face{
          font-family: "${name}";
          src: url(${src});
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `;
}
