/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import expect from "expect";
import { printInstances } from "../src/InstanceReport";
import { parseTestFile } from "./util-test";

describe("InstanceReport", function() {
  let lines;

  before(async () => {
    const result = await parseTestFile();
    lines = result.lines;
  });

  it("prints table", () => {
    expect(printInstances(lines)).toBeDefined();
  });
});
