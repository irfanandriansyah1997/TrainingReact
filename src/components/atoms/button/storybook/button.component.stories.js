/**
 * Button Component Documentation
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.13
 */

/* eslint-disable */

import React, { Component } from 'react';
import Template from 'storybook-template/default-template/default-template.component';
import Heading from 'storybook/atoms/heading/heading.component';
import Text from 'storybook/atoms/text/text.component';
import Coding from 'storybook/molecules/coding/coding.component';
import Button from '../button.component';

const defaultButton = [
    {
        type: 'primary',
        text: 'button primary',
        outline: false,
        shadow: false,
        size: 'default',
        disable: false
    },
    {
        type: 'secondary',
        text: 'button secondary',
        outline: false,
        shadow: false,
        size: 'default',
        disable: false
    },
    {
        type: 'tertiary',
        text: 'button tertiary',
        outline: false,
        shadow: false,
        size: 'default',
        disable: false
    }
];

class ButtonStorybook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            component: {
                default: defaultButton,
                outline: defaultButton.map(item => ({...item, outline: true })),
                shadow: defaultButton.map(item => ({...item, shadow: true })),
                small: defaultButton.map(item => ({...item, size: 'small' })),
                disable: defaultButton.map(item => ({...item, disable: true }))
            },
            wording: `Button komponen digunakan untuk pengganti tag Button , A ,
                ataupun Link yang dapat disesuaikan background dan warna text.`,
            template: (disable, outline, shadow, size, text, type ) => '<Button' +
            '\n    disable="' + disable + '"' +
            '\n    outline="' + outline + '"' +
            '\n    shadow="' + shadow + '"' +
            '\n    size="' + size + '"' +
            '\n    type="' + type + '"' +
            '\n>' +
            '\n    ' + text + '\n' +
            '</Button> \n',
            example: [
                {
                    key: 'outline',
                    text: 'Button Outline'
                },
                {
                    key: 'shadow',
                    text: 'Button Shadow'
                },
                {
                    key: 'small',
                    text: 'Button Small Size'
                },
                {
                    key: 'disable',
                    text: 'Button Disable'
                },
            ]
        };
    }

    getCode(key) {
        const { component, template } = this.state;
        return component[key].map(({
            disable,
            outline,
            shadow,
            size,
            text,
            type
        }) => template(
            disable,
            outline,
            shadow,
            size,
            text,
            type
        )).join('\n');
    }

    render() {
        const { component, wording, example } = this.state;

        return (
            <Template
                componentName="Button"
                description={wording}
            >
                <Heading>Penggunaan Komponen</Heading>
                <Text>Contoh penggunaan komponent Button.</Text>
                <Coding code={this.getCode('default')}>
                    {component['default'].map((item) => (
                        <Button display="inline-block" {...item}>
                            {item.text}
                        </Button>
                    ))}
                </Coding>
                <hr></hr>
                <Heading parent>Contoh Component</Heading>
                {example.map(exampleItem => (
                    <React.Fragment>
                        <Heading>{exampleItem.text}</Heading>
                        <Text>Contoh penggunaan komponent {exampleItem.text}.</Text>
                        <Coding code={this.getCode(exampleItem.key)}>
                            {component[exampleItem.key].map((item) => (
                                <Button display="inline-block" {...item}>
                                    {item.text}
                                </Button>
                            ))}
                        </Coding>
                    </React.Fragment>
                ))}

            </Template>
        );
    }
}

export default ButtonStorybook;
