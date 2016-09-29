/*
 * Copyright (c) Microsoft
 * All rights reserved.
 * MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { INetworkNavigatorNode } from "../models";

/**
 * Represents the settings for this visual
 */
export interface INetworkNavigatorVisualSettings {
    search?: {
        caseInsensitive?: boolean;
    };
    layout?: {
        animate?: boolean;
        maxNodeCount?: number;
        linkDistance?: number;
        linkStrength?: number;
        gravity?: number;
        charge?: number;
        labels?: boolean;
        minZoom?: number;
        maxZoom?: number;
        defaultLabelColor?: string;
        fontSizePT?: number;
    };
};

/**
 * The lineup data
 */
export interface INetworkNavigatorSelectableNode extends powerbi.visuals.SelectableDataPoint, INetworkNavigatorNode {

    /**
     * The nodes index into the node list
     */
    index: number;

    /**
     * The number of neighbor nodes to this node
     */
    neighbors: number;

    /**
     * The expression that will exactly match this row
     */
    filterExpr: powerbi.data.SQExpr;
}
