import React from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    footer: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: '30px',
        letterSpacing: 0.3,
        alignSelf: 'flex-end',
        '@media (max-width: 768px)': {
            marginLeft: 36
        },
        '@media (max-width: 468px)': {
            fontSize: 8
        }
    }
});

function FooterComponent() {
    return (
        <Row className={css(styles.footer)} vertical="center" horizontal="space-between">
            <div className="footer">
                @Sean Choi
            </div>
        </Row >
    );
}


export default FooterComponent;