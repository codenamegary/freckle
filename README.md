# Tasmota Integration for Google Meet

## About

This open source Google Chrome extension was created to automatically turn on a SMART WiFi lightbulb or socket during a meeting. I have a red bulb in a lamp outside my home office and this is equivalent to an automatic "Do Not Disturb" sign. I specifically made this to work with Tasmota devices.

[More About Tasmota](https://tasmota.github.io/docs/About/)

The extension works by inspecting pages loaded on [meet.google.com](https://meet.google.com) to detect the presence of a "Leave call" button. When the presence of this button is detected, it fires an "online" event which is used to issue a request to an HTTP endpoint. When this element leaves the dom, it fires an "offline" event and hits another HTTP endpoint. These endpoints are fully configurable
and could work with any device that has an HTTP API on your local network.

## Configuration Options

Screenshot goes here.

## Browser Configuration

In order to execute calls to unsecured URLs, you'll need to allow Chrome to use insecure content on meet.google.com. Go to [meet.google.com](https://meet.google.com) and then follow the instructions [linked here](https://stackoverflow.com/questions/18321032/how-to-get-chrome-to-allow-mixed-content).

## Tasmota Device Configuration

If you are getting errors sending commands to your Tasmota device, it might be because you need to allow "*" in your device's CORS Domain setting.

- Go to [http://<your_device_ip>](http://<your_device_ip>)
- Click on "Configuration"
- Click on "Configure WiFi"
- Enter an asterisk "*" in the "CORS Domain" setting and save changes

## Thank You

Thank you Tasmota for creating such a neat little project! Without you I could not have done this.