export enum WidgetTypes {
  HEADER = 'Header',
  FOOTER = 'Footer',
  TEXT = 'Text',
  IMAGE = 'Image',
  CARDS = 'Products',
  GALLERY = 'Images',
  SLIDER = 'Slider'
}

export function makeId (length: number) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export default interface IWidget {
  id: string,
  number: number,
  type: WidgetTypes,
  data: any,
  template: string
}

export function staticForPage () {
  return `
  <style>
  * {
    color: #19171D;
  }

  html {
    height: 100vh;
    padding: 0;
    margin: 0;

    overflow-x: hidden;
  }

  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  #app {
    height: 100%;
    font-family: 'Inter', sans-serif;
  }

  input[type=text], input[type=password], textarea {
    width: 100%;
    margin-top: 8px;
    padding: 16px;
    border: 1px solid #19171D1A;
    border-radius: 12px;
    box-sizing: border-box;

    color: #19171D;
    font-size: 16px;
    font-family: 'Inter', sans-serif;

    outline: none;

    transition: 0.1s;
  }

  button {
    width: 100%;
    border: none;
    border-radius: 12px;
    font-size: 14px;
    padding: 16px;
    box-sizing: border-box;

    cursor: pointer;

    transition: .1s;
  }

  button.blue-btn {
    background-color: #3870FF;
    color: white;
  }

  button.blue-btn:active {
    background-color: #759bff;
  }

  button.white-btn {
    background-color: #FFFFFF;
    color: #718096;
    border: 1px solid #71809633;
  }

  button.white-btn:active {
    background-color: #e3e1e1;
  }

  button.black-btn {
    background-color: #19171D;
    color: #FFFFFF;
  }

  button.black-btn:active {
    background-color: #35323b;
  }

  button.link {
    margin-left: 16px;
    padding: 0;
    width: max-content;

    color: #3870FF;
    background: none;
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 16px;
  }
  </style>
  `
}
