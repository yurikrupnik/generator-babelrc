const Generator = require('yeoman-generator/lib');

module.exports = class Babel extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.option('destination', {
            type: String,
            required: false,
            desc: 'destination root',
            default: ''
        });

        this.option('react', {
            type: Boolean,
            required: false,
            desc: 'Include React support',
            default: false
        });
    }

    _installDevPackages() {
        const { react } = this.options;
        this.npmInstall([
            '@babel/core',
            '@babel/plugin-syntax-object-rest-spread',
            "@babel/plugin-syntax-dynamic-import",
            '@babel/preset-env'
        ].concat(react ? [
            '@babel/preset-react'
        ]: []), { 'save-dev': true });
    }

    writing() {
        const { destination } = this.options;
        this.fs.copyTpl(
            this.templatePath('.babelrc'),
            this.destinationPath(`${destination ? destination + '/' : ''}.babelrc`),
            this.options
        );
    }

    install() {
        this._installDevPackages();
    }
};
