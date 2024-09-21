
export interface Animation {
  width: number,
  height: number,
  frames: readonly string[]
}

export function base64ToContentMatrix(b64Data: string): boolean[] {
  const data = new Uint8Array(
    atob(b64Data)
      .split('')
      .map(c => c.charCodeAt(0))
  );

  const res: boolean[] = [];

  data.forEach(b => res.push(b > 0));

  return res;
}

export function contentMatrixToContentHtml(
  width: number,
  matrix: boolean[],
  chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyz!"#$%&()*+,-./0123456789[]@=?;:_~}|{öäüÖÄÜ+='
): string {
  let html = '';

  matrix.forEach((v, i) => {
    const randChar = chars.charAt(Math.floor(Math.random()*chars.length));

    html += v ? randChar : ' ';

    if (((i + 1) % width) === 0) {
      html += '<br />';
    }
  });

  return html;
}
