import React, { Component } from 'react';
import Template from 'storybook-template/default-template/default-template.component';
import Heading from 'storybook/atoms/heading/heading.component';
import Text from 'storybook/atoms/text/text.component';
import TextComponent from '../text.component';

class ButtonStorybook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            component: [
            ],
            wording: `Button komponen digunakan untuk pengganti tag Button , A ,
                ataupun Link yang dapat disesuaikan background dan warna text.`,
            template: (type, text) => `<Button type="${type}">\n    ${text}\n</Button> \n`
        };
    }

    getCode() {
        const { component, template } = this.state;
        return component.map(({ type, text }) => template(type, text)).join('\n');
    }

    render() {
        const { wording } = this.state;

        return (
            <Template componentName="Text" description={wording}>
                <Heading>Penggunaan Komponen</Heading>
                <Text>Contoh penggunaan komponent Text.</Text>
                <TextComponent>Hello World</TextComponent>
            </Template>
        );
    }
}

export default ButtonStorybook;
