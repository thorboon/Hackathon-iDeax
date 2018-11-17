import React, { Component } from 'react';
import { Item, Input } from 'native-base';

const TitledInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

    return (
        <Item>
            <Input
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
            />
        </Item>
    );
};

export default TitledInput;