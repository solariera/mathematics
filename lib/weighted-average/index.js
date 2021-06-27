"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weightedAverage = void 0;
const sum_1 = require("../sum");
/**
 * weightedAverage
 * @param data
 * @returns
 */
const weightedAverage = (...data) => {
    const weights = data.map((d) => d.weight);
    let values = 0;
    for (let i = 0; i < data.length; i++)
        values += data[i].value * data[i].weight;
    return values / sum_1.sum(...weights);
};
exports.weightedAverage = weightedAverage;
