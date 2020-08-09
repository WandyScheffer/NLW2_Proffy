import React from 'react';
import { View, Text, BackHandler } from 'react-native';

import PageHeader from '../../components/PageHeader';
import styles from './styles';
//testes...
// import { useNavigation } from '@react-navigation/native';

function TeacherList() {

    //teste... q funcionou...
    // const { navigate } = useNavigation();
    // const onBackPress = () => {
    //     navigate('Landing');
    //     return true;
    // }

    // BackHandler.addEventListener('hardwareBackPress', onBackPress);
    //mas vou melhorar isso aqui ainda...

    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" />
        </View>
    )
}

export default TeacherList;