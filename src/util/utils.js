export const hexToRgba = (hex, opacity) => {
    const rgb = hex.match(/\w\w/g).map((hex) => parseInt(hex, 16));
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
  };