import * as m from 'zigbee-herdsman-converters/lib/modernExtend';

export default {
    zigbeeModel: ['FH9128'],
    model: 'FH9128',
    vendor: 'FuturehomeAS',
    description: 'Futurehome Zigbee Dimmer FH9128',
    extend: [m.light({
        colorTemp: false,         // No color temperature
        color: false,             // No color control
        disableEffect: true,      // Avoid fade-down on off
        powerOnBehavior: true,    // Allow power-on behavior configuration if supported
        noConfigure: false,       // Keep reporting enabled
    })],
    meta: {
        disableDefaultResponse: false,
        supportsHueAndSaturation: false,
    },
};
