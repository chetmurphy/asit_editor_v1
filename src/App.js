import logo from './logo.svg';
import './App.css';

import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue) {
    console.log("change", newValue);
}

// Render editor
render(
    <AceEditor
        mode="yaml"
        theme="github"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
    />,
    document.getElementById("root")
);


