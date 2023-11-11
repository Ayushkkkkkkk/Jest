package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MainTest {

    @Test
    void answer() {
        String str = "{{{{}}}}";
        String str1 = "{{{{{{{{{))))))))}}}}}}}}}";
        boolean expected = false;
        boolean actual = Main.answer(str1);
        assertEquals(expected , actual);
    }
}