const toggleProxy = async () => {
  const currentProxy = await browser.proxy.settings.get({});
  let { proxyType = 'system'} = currentProxy.value;
  proxyType = proxyType === 'system' ? 'none' : 'system';
  await browser.proxy.settings.set({value: { proxyType }});

  const isSystem = proxyType === 'system';
  const title = isSystem ? 'Using System Proxy' : 'Using No Proxy';
  const path = isSystem ? 'icons/color-32.png' : 'icons/grayscale-32.png';
  await browser.browserAction.setIcon({ path });
  await browser.browserAction.setTitle({ title });
}

browser.browserAction.onClicked.addListener(toggleProxy);
