import { ScrollView, Text, StyleSheet } from "react-native"

import { TopBar } from "../../components/Topbar"
import { Container } from "../Styles"

export function Ferias(){
    return(
        <Container>
            <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollStyle} style={{ width: '100%' }}>
                <TopBar />

                    <Text>Férias</Text>

            </ScrollView>

        </Container>
    )
}

const styles = StyleSheet.create({
    
    scrollStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },

   
    
})


