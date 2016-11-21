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

/**
 * Defines the minimum, maximum, and default values for charge
 */
export const charge = { min: -100000, max: 10, default: -120 };

/**
 * Defines the minimum, maximum, and default values for link distance
 */
export const linkDistance = { min: 1, max: 30, default: 10 };

/**
 * Defines the minimum, maximum, and default values for link strength
 */
export const linkStrength = { min: 1, max: 20, default: 2 };

/**
 * Defines the minimum, maximum, and default values for gravity
 */
export const gravity = { min: .1, max: 10, default: .1 };

/**
 * Defines the minimum, maximum, and default values for the minimum zoom of the graph
 */
export const minZoom = { min: .0001, max: 100000, default: .1 };

/**
 * Defines the minimum, maximum, and default values for the maximum zoom of the graph
 */
export const maxZoom = { min: .0001, max: 100000, default: 100 };

/**
 * Defines the minimum, maximum, and default values for the font size
 */
export const fontSizePT = { min: 6, max: 40, defaultValue: 8 };

export const edgeStartColor = { defaultValue: "#FDFEFE" };

export const edgeEndColor = { defaultValue: "#273746" };

export const edgeMinWidth = { defaultValue: 1, min: 0, max: 15 };

export const edgeMaxWidth = { defaultValue: 5, min: 1, max: 15 };
