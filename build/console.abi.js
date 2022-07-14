"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleAbi = void 0;
exports.consoleAbi = {
    "ABI version": 2,
    version: "2.2",
    header: ["time"],
    functions: [
        {
            name: "log",
            inputs: [{ name: "_log", type: "string" }],
            outputs: [],
        },
        {
            name: "constructor",
            inputs: [],
            outputs: [],
        },
    ],
    data: [],
    events: [],
    fields: [
        { name: "_pubkey", type: "uint256" },
        { name: "_timestamp", type: "uint64" },
        { name: "_constructorFlag", type: "bool" },
    ],
};