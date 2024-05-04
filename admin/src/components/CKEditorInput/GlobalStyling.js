import {createGlobalStyle} from "styled-components";
import { style as common } from "./styles/common";
import { style as light } from "./styles/light";
import { style as dark } from "./styles/dark";
import { style as system } from './styles/system';

export const getGlobalStyling = ( theme ) => {
  let themeStyle = null;
  switch ( theme ) {
    case 'dark':
      themeStyle = dark;
      break;
    case 'light':
      themeStyle = light;
      break;
    case 'system':
      themeStyle = system;
      break;
  }

  return createGlobalStyle`
    ${ common }
    ${ themeStyle }
  `;
};
