"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PinCodeChoose_1 = require("./src/PinCodeChoose");
const PinCode_1 = require("./src/PinCode");
const PinCodeEnter_1 = require("./src/PinCodeEnter");
const react_native_1 = require("react-native");
const ApplicationLocked_1 = require("./src/ApplicationLocked");
const timePinLockedAsyncStorageNameDefault = 'timePinLockedRNPin';
const pinAttemptsAsyncStorageNameDefault = 'pinAttemptsRNPin';
class PINCode extends React.PureComponent {
    constructor(props) {
        super(props);
        this.changeInternalStatus = (status) => {
            this.setState({ internalPinStatus: status });
        };
        this.state = { internalPinStatus: PinCodeEnter_1.PinResultStatus.initial, pinLocked: false };
        this.changeInternalStatus = this.changeInternalStatus.bind(this);
    }
    async componentWillMount() {
        await react_native_1.AsyncStorage.getItem(this.props.timePinLockedAsyncStorageName || timePinLockedAsyncStorageNameDefault).then((val) => {
            this.setState({ pinLocked: !!val });
        });
    }
    render() {
        const { status, pinStatus } = this.props;
        return (React.createElement(react_native_1.View, { style: styles.container },
            status === PinCode_1.PinStatus.choose &&
                React.createElement(PinCodeChoose_1.default, { storePin: this.props.storePin || null, titleChoose: this.props.titleChoose || '1 - Enter a PIN Code', subtitleChoose: this.props.subtitleChoose || 'to keep your information secure', titleConfirm: this.props.titleConfirm || '2 - Confirm your PIN Code', subtitleConfirm: this.props.subtitleConfirm || '', passwordComponent: this.props.passwordComponent, buttonNumberComponent: this.props.buttonNumberComponent, passwordLength: this.props.passwordLength, titleAttemptFailed: this.props.titleAttemptFailed, titleConfirmFailed: this.props.titleConfirmFailed, subtitleError: this.props.subtitleError, colorPassword: this.props.colorPassword, numbersButtonOverlayColor: this.props.numbersButtonOverlayColor, buttonDeleteComponent: this.props.buttonDeleteComponent, titleComponent: this.props.titleComponent, subtitleComponent: this.props.subtitleComponent, pinCodeKeychainName: this.props.pinCodeKeychainName || 'reactNativePinCode' }),
            status === PinCode_1.PinStatus.enter &&
                React.createElement(PinCodeEnter_1.default, { title: this.props.titleEnter || 'Enter your PIN Code', subtitle: this.props.subtitleEnter || '', handleResult: this.props.handleResultEnterPin || null, maxAttempts: this.props.maxAttempts || 3, changeInternalStatus: this.changeInternalStatus, openError: this.props.openAppLockedScreen || null, pinStatusExternal: this.props.pinStatus || PinCodeEnter_1.PinResultStatus.initial, storedPin: this.props.storedPin || null, touchIDSentence: this.props.touchIDSentence || 'To unlock your application', status: PinCode_1.PinStatus.enter, buttonNumberComponent: this.props.buttonNumberComponent, passwordLength: this.props.passwordLength, passwordComponent: this.props.passwordComponent, titleAttemptFailed: this.props.titleAttemptFailed, titleConfirmFailed: this.props.titleConfirmFailed, subtitleError: this.props.subtitleError, colorPassword: this.props.colorPassword, numbersButtonOverlayColor: this.props.numbersButtonOverlayColor, buttonDeleteComponent: this.props.buttonDeleteComponent, titleComponent: this.props.titleComponent, subtitleComponent: this.props.subtitleComponent, timePinLockedAsyncStorageName: this.props.timePinLockedAsyncStorageName || timePinLockedAsyncStorageNameDefault, pinAttemptsAsyncStorageName: this.props.pinAttemptsAsyncStorageName || pinAttemptsAsyncStorageNameDefault }),
            (pinStatus === PinCodeEnter_1.PinResultStatus.locked ||
                this.state.internalPinStatus === PinCodeEnter_1.PinResultStatus.locked ||
                this.state.pinLocked) &&
                React.createElement(ApplicationLocked_1.default, { timeToLock: this.props.timeLocked || 300000, textButton: this.props.textButtonLockedPage || 'Quit', changeStatus: this.changeInternalStatus, textDescription: this.props.textDescriptionLockedPage || undefined, buttonComponent: this.props.buttonComponentLockedPage || null, timerComponent: this.props.timerComponentLockedPage || null, textTitle: this.props.textTitleLockedPage || undefined, titleComponent: this.props.titleComponentLockedPage || undefined, iconComponent: this.props.iconComponentLockedPage || null, timePinLockedAsyncStorageName: this.props.timePinLockedAsyncStorageName || timePinLockedAsyncStorageNameDefault, pinAttemptsAsyncStorageName: this.props.pinAttemptsAsyncStorageName || pinAttemptsAsyncStorageNameDefault, onClickButton: this.props.onClickButtonLockedPage || (() => {
                        throw ('Quit application');
                    }) })));
    }
}
exports.default = PINCode;
let styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
