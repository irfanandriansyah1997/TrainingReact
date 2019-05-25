import React, { Component } from 'react';
import Template from 'storybook-template/default-template/default-template.component';
import Heading from 'storybook/atoms/heading/heading.component';
import Text from 'storybook/atoms/text/text.component';
import Coding from 'storybook/molecules/coding/coding.component';
import Button from '../button.component';

class ButtonStorybook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            component: [
                {
                    type: 'primary',
                    text: 'button primary'
                },
                { type: 'secondary', text: 'button secondary' },
                { type: 'tertiary', text: 'button tertiary' }
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
        const { component, wording } = this.state;

        return (
            <Template
                componentName="Button"
                description={wording}
            >
                <Heading>Penggunaan Komponen</Heading>
                <Text>Contoh penggunaan komponent Button.</Text>
                <Coding code={this.getCode()}>
                    {component.map((item) => (
                        <Button display="inline-block" {...item}>
                            {item.text}
                        </Button>
                    ))}
                </Coding>
            </Template>
        );
    }
}

export default ButtonStorybook;
