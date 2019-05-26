/* eslint-disable */

import React, { Component } from 'react';
import Template from 'storybook-template/default-template/default-template.component';
import Heading from 'storybook/atoms/heading/heading.component';
import Text from 'storybook/atoms/text/text.component';
import Coding from 'storybook/molecules/coding/coding.component';
import Icon from '../icon.component';

const defaultIcon = [
    {
        children: 'edit',
        color: null,
        size: 'default',
        type: 'material'
    },
    {
        children: 'uif-prospek-harga',
        color: null,
        size: 'default',
        type: 'urbanindo'
    },
];

class ButtonStorybook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            component: {
                default: defaultIcon,
                color: defaultIcon.map(item => ({...item, color: '#69acec' })),
                small: defaultIcon.map(item => ({...item, size: 'small' })),
                big: defaultIcon.map(item => ({...item, size: 'big' })),
                customSize: defaultIcon.map(item => ({...item, size: 50 })),
            },
            wording: `Icon komponen digunakan untuk memanggil icon pada material icon / urbanindo icon font`,
            template: (children, color, size, type) => '<Icon' +
            '\n    color="' + color + '"' +
            '\n    size="' + size + '"' +
            '\n    type="' + type + '"' +
            '\n>' +
            '\n    ' + children + '\n' +
            '</Icon> \n',
            example: [
                {
                    key: 'small',
                    text: 'Icon small'
                },
                {
                    key: 'big',
                    text: 'Icon big'
                },
                {
                    key: 'color',
                    text: 'Icon with custom color'
                },
                {
                    key: 'customSize',
                    text: 'Button with custom size'
                }
            ]
        };
    }

    getCode(key) {
        const { component, template } = this.state;
        return component[key].map(({
            children,
            color,
            size,
            type
        }) => template(
            children,
            color,
            size,
            type
        )).join('\n');
    }

    render() {
        const { component, wording, example } = this.state;

        return (
            <Template
                componentName="Icon"
                description={wording}
            >
                <Heading>Penggunaan Komponen</Heading>
                <Text>Contoh penggunaan komponent Icon.</Text>
                <Coding code={this.getCode('default')}>
                    {component['default'].map((item) => (
                        <Icon {...item}>
                            {item.children}
                        </Icon>
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
                                <Icon {...item}>
                                    {item.children}
                                </Icon>
                            ))}
                        </Coding>
                    </React.Fragment>
                ))}

            </Template>
        );
    }
}

export default ButtonStorybook;
