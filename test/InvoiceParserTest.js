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
import { parseTestFile } from "./util-test";

describe("InvoiceParser", function() {
  let lines, stats;

  before(async () => {
    const result = await parseTestFile();
    lines = result.lines;
    stats = result.stats;
  });

  it("should get stats from an AWS invoice", () => {
    expect(lines).toBeDefined();
    expect(stats).toBeDefined();
    expect(
      stats.AmazonEC2.BoxUsage["c4.large"].UsageQuantity.toString()
    ).toMatch("1690.032226");
  });

  it("should include instances data from a AWS invoice", () => {
    expect(lines.find(line => !!line.awsVmType)).toBeDefined();
  });
});
