(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    './documentation/Troubleshooting.mdx': function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t('./node_modules/react/index.js'),
        o = t.n(a),
        r = t('./node_modules/@mdx-js/tag/dist/index.js');
      function l(e, n) {
        if (null == e) return {};
        var t,
          a,
          o = (function(e, n) {
            if (null == e) return {};
            var t,
              a,
              o = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++) (t = r[a]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (t = r[a]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
        }
        return o;
      }
      n.default = function(e) {
        var n = e.components;
        l(e, ['components']);
        return o.a.createElement(
          r.MDXTag,
          { name: 'wrapper', components: n },
          o.a.createElement(
            r.MDXTag,
            { name: 'h1', components: n, props: { id: 'troubleshooting' } },
            'Troubleshooting',
          ),
          o.a.createElement(
            r.MDXTag,
            {
              name: 'h2',
              components: n,
              props: { id: 'share-remote-pdf-file-with-gmail--whatsapp-ios' },
            },
            'Share Remote PDF File with Gmail & WhatsApp (iOS)',
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'p', components: n },
            'When sharing a pdf file with base64, there are two current problems.',
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'ol', components: n },
            o.a.createElement(
              r.MDXTag,
              { name: 'li', components: n, parentName: 'ol' },
              'On WhatsApp base64 wont be recognized => nothing to share',
            ),
            o.a.createElement(
              r.MDXTag,
              { name: 'li', components: n, parentName: 'ol' },
              'In the GmailApp the file extension is wrong (.dat).',
            ),
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'p', components: n },
            'Therefore we use this "workaround" in order to handle pdf sharing for iOS Apps to mentioned Apps',
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'ol', components: n },
            o.a.createElement(
              r.MDXTag,
              { name: 'li', components: n, parentName: 'ol' },
              'Install react-native-fetch-blob',
            ),
            o.a.createElement(
              r.MDXTag,
              { name: 'li', components: n, parentName: 'ol' },
              'Set a specific path in the RNFetchBlob configurations',
            ),
            o.a.createElement(
              r.MDXTag,
              { name: 'li', components: n, parentName: 'ol' },
              'Download the PDF file to temp device storage',
            ),
            o.a.createElement(
              r.MDXTag,
              { name: 'li', components: n, parentName: 'ol' },
              "Share the response's path() of the donwloaded file directly",
            ),
          ),
          o.a.createElement(r.MDXTag, { name: 'p', components: n }, 'Code:'),
          o.a.createElement(
            r.MDXTag,
            { name: 'pre', components: n },
            o.a.createElement(
              r.MDXTag,
              { name: 'code', components: n, parentName: 'pre' },
              "static sharePDFWithIOS(fileUrl, type) {\n  let filePath = null;\n  let file_url_length = fileUrl.length;\n  const configOptions = {\n    fileCache: true,\n    path:\n      DIRS.DocumentDir + (type === 'application/pdf' ? '/SomeFileName.pdf' : '/SomeFileName.png') // no difference when using jpeg / jpg / png /\n  };\n  RNFetchBlob.config(configOptions)\n    .fetch('GET', fileUrl)\n    .then(async resp => {\n      filePath = resp.path();\n      let options = {\n        type: type,\n        url: filePath // (Platform.OS === 'android' ? 'file://' + filePath)\n      };\n      await Share.open(options);\n      // remove the image or pdf from device's storage\n      await RNFS.unlink(filePath);\n    });\n}\n",
            ),
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'p', components: n },
            'Nothing to do on Android. You can share the pdf file with base64',
          ),
          o.a.createElement(
            r.MDXTag,
            { name: 'pre', components: n },
            o.a.createElement(
              r.MDXTag,
              { name: 'code', components: n, parentName: 'pre' },
              "static sharePDFWithAndroid(fileUrl, type) {\n  let filePath = null;\n  let file_url_length = fileUrl.length;\n  const configOptions = { fileCache: true };\n  RNFetchBlob.config(configOptions)\n    .fetch('GET', fileUrl)\n    .then(resp => {\n      filePath = resp.path();\n      return resp.readFile('base64');\n    })\n    .then(async base64Data => {\n      base64Data = `data:${type};base64,` + base64Data;\n      await Share.open({ url: base64Data });\n      // remove the image or pdf from device's storage\n      await RNFS.unlink(filePath);\n    });\n}\n",
            ),
          ),
        );
      };
    },
  },
]);
