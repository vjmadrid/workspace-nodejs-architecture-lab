const path = require('path');
const Jasmine = require('../../node_modules/jasmine/lib/jasmine.js');
const Reporters = require('jasmine-reporters');
const JasmineConsoleReporter = require('jasmine-console-reporter');

var jasmine = new Jasmine();
jasmine.loadConfigFile('./test/resources/jasmine.json');

var reporterConsole = new JasmineConsoleReporter({
	colors: 1,
	cleanStack: 3,
	verbosity: 4,
	listStyle: 'indent',
	activity: false
});

var reporterJUnitXML = new Reporters.JUnitXmlReporter({
	savePath: path.join(__dirname, '../reports/test'),
	filePrefix: 'api-test-results',
	consolidateAll: true
});

jasmine.addReporter(reporterConsole);
jasmine.addReporter(reporterJUnitXML);

jasmine.execute();