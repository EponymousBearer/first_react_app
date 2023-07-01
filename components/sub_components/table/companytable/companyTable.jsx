import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Table, Row, Column } from 'react-native-table-component';
import styles from './companyTable.styles';

const CompanyTable = () => {
    // Define the table headers and data
    const tableHead = ['Company Name', 'Billing Address', 'Phone Number', 'Location', 'Zip Code', 'Language'];

    // State to hold the table data
    const [tableData, setTableData] = useState([]);

    // State to hold the input values
    const [inputValues, setInputValues] = useState({
        companyName: '',
        billingAddress: '',
        phoneNumber: '',
        location: '',
        zipCode: '',
        language: '',
    });

    // Function to handle input changes
    const handleInputChange = (value, field) => {
        setInputValues({ ...inputValues, [field]: value });
    };

    // Function to handle adding a new row
    const handleAddRow = () => {
        const newRow = Object.values(inputValues);
        setTableData([...tableData, newRow]);
        setInputValues({
            companyName: '',
            billingAddress: '',
            phoneNumber: '',
            location: '',
            zipCode: '',
            language: '',
        });
    };

    return (
        <View style={styles.container}>
            <Table borderStyle={styles.border}>
                <Row data={tableHead} style={styles.head} textStyle={styles.headText} />

                {/* Input fields for each column */}
                <Row
                    style={styles.inputRow}
                    data={[
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                value={inputValues.companyName}
                                onChangeText={(value) => handleInputChange(value, 'companyName')}
                                placeholder="Company Name"
                            />
                        </View>,
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                value={inputValues.billingAddress}
                                onChangeText={(value) => handleInputChange(value, 'billingAddress')}
                                placeholder="Billing Address"
                            />
                        </View>,
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                value={inputValues.phoneNumber}
                                onChangeText={(value) => handleInputChange(value, 'phoneNumber')}
                                placeholder="Phone Number"
                            />
                        </View>,
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                value={inputValues.location}
                                onChangeText={(value) => handleInputChange(value, 'location')}
                                placeholder="Location"
                            />
                        </View>,
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                value={inputValues.zipCode}
                                onChangeText={(value) => handleInputChange(value, 'zipCode')}
                                placeholder="Zip Code"
                            />
                        </View>,
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                value={inputValues.language}
                                onChangeText={(value) => handleInputChange(value, 'language')}
                                placeholder="Language"
                            />
                        </View>,
                    ]}
                    textStyle={styles.inputRowText}
                />

                {/* Rest of the code... */}
            </Table>

            <Button title="Add Row" onPress={handleAddRow} />
        </View>
    );
};

export default CompanyTable;