import { assert } from "chai";
import User from "@app/user";

describe("User", () => {
  it("should returns 'Supreme Lord' given 'Glayson' name", () => {
    // Given
    const user = new User("Glayson");

    // When
    const result = user.greeter();

    // Then
    assert.equal(result, "Supreme Lord");
  });
});
