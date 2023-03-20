/**
 * Test
 * @module
 */
import {planEV} from "./ProfileSteering"
import {ChargingMode} from "../../data/models/ChargingMode";

// @ts-ignore
test('trivial', () => {
    let chargeRequired = 10000;
    let result = planEV(chargeRequired, [18, 30], ChargingMode.Fast);
    let sum = result.reduce((a, b) => a + b.charge, 0);
    expect(sum).toEqual(chargeRequired);
})
