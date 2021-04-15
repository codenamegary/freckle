# Freckle

Automatic Do-Not-Disturb integration for Google Meet with SMART Wifi bulbs and devices running [Tasmota](https://tasmota.github.io/docs/About/).

[Install from the Chrome Web Store](https://chrome.google.com/webstore/detail/freckle/ldphmaibkhdmcadfnjbgdpfjagekgpom)

[Download the Google Chrome extension zip file](https://github.com/codenamegary/freckle/archive/refs/heads/master.zip)

## About

This open source Google Chrome extension was created to automatically turn on a SMART WiFi lightbulb or socket during a meeting. I have a red bulb in a lamp outside my home office and this is equivalent to an automatic "Do Not Disturb" sign. I specifically made this to work with Tasmota devices.

[More About Tasmota](https://tasmota.github.io/docs/About/)

The extension works by inspecting pages loaded on [meet.google.com](https://meet.google.com) to detect the presence of a "Leave call" button. When the presence of this button is detected, it fires an "online" event which is used to issue a request to an HTTP endpoint. When this element leaves the dom, it fires an "offline" event and hits another HTTP endpoint. These endpoints are fully configurable and could work with any device that has an HTTP API on your local network.

## Configuration Options

![Screenshot of Extension options](https://github.com/codenamegary/freckle/blob/master/README-options.png?raw=true)

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

And big thanks to [Troy Williams](https://open.spotify.com/artist/6Op58fl8fRFPKJhFvV3Ays?si=jy4zWX-VTeajSoqcxC5eOQ) who is an incredibly talented musician, songwriter and producer for the inspiration.

## Contributing

Pull requests welcome!

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Support

- Check the [wiki](https://github.com/codenamegary/freckle/wiki)
- File an [issue](https://github.com/codenamegary/freckle/issues)
- Email me [freckle.software@gmail.com](mailto:freckle.software@gmail.com)

## Version History

Version | Date | Notes
--- | -------------- | ---
1.0 | 2021-04-08 | Initial GitHub release and submission to Chrome Web Store

## FAQ

### Why is it called Freckle?

I made this project during the pandemic to deter my kids from barging into my office during meetings. My daughter is particularly chatty and very much enjoys knowing what I'm working on and who I'm talking to. She also has some adorable freckles. So with that in mind, I am naming this project after her.

### Does it work with IFTTT?

I would love that! I read some documentation and it was not at all clear to me how to publish a custom trigger into IFTTT. If you have any insight into this, please contact me.

### Is my wicked cool spark-mc-zapface SMART plug supported?

Does it have a locally accessible HTTP API? If yes, probably. If not, no. If you are asking "what's an  API", Troy that's a great question.

## License

The MIT License (MIT)

Copyright (c) 2021 Gary Saunders

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.