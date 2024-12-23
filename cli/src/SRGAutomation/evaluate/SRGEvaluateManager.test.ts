import AuthOptions from "../../dynatrace/AuthOptions";
import SRGEvaluateManager from "./SRGEvaluateManager";
import SRGEvaluate from "./SRGEvaluate";

jest.mock("../../dynatrace/AuthOptions");
jest.mock("../../dynatrace/DTApiV3");
jest.mock("./SRGEvaluate");

describe("SRGEvaluateManager", () => {
  it("trigger evaluation", async () => {
    const auth = new AuthOptions();
    const options = {
      service: "test",
      stage: "test",
      delay: "0",
      buildId: "test",
      provider: "test",
      releaseVersion: "test",
      application: "test"
    };
    SRGEvaluateManager.executeEvaluation(options, auth);

    expect(SRGEvaluate).toHaveBeenCalled();
    expect(auth.setOptionsValuesForAuth).toHaveBeenCalledWith(options);
  });
});
