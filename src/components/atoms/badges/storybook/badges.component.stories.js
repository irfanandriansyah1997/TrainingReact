/**
 * Badges Component Documentation
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.26
 */

/* eslint-disable */

import React, { Component } from 'react';
import Template from 'storybook-template/default-template/default-template.component';
import Heading from 'storybook/atoms/heading/heading.component';
import Text from 'storybook/atoms/text/text.component';
import Coding from 'storybook/molecules/coding/coding.component';
import Badges from '../badges.component';

const defaultBadges = [
    {
        children: 5
    },
    {
        children: 71
    },
    {
        children: 100
    }
];

class BadgesStorybook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            component: {
                default: defaultBadges
            },
            wording: `Badges komponen digunakan untuk membuat badges pada notifikasi atau hanya
            informasi angka pada sebuah component`,
            template: (children) => `<Badges>${children}</Badges>\n`
        };
    }

    getCode(key) {
        const { component, template } = this.state;
        return component[key].map(({
            children
        }) => template(
            children
        )).join('\n');
    }

    render() {
        const { component, wording } = this.state;

        return (
            <Template
                componentName="Badges"
                description={wording}
            >
                <Heading>Penggunaan Komponen</Heading>
                <Text>Contoh penggunaan komponent Badges.</Text>
                <Coding code={this.getCode('default')}>
                    {component['default'].map((item) => (
                        <Badges>
                            {item.children}
                        </Badges>
                    ))}
                </Coding>
            </Template>
        );
    }
}

export default BadgesStorybook;
