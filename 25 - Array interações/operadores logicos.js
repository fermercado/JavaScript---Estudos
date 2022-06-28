// Falsy
if (false)
  if (0)
    if (NaN)
      if (null)
        if (undefined)
          // ou -0
          if ('')
            if (true)
              if (1)
                if (' ')
                  // ou "" ou ``

                  // Truthy
                  if ('andre')
                    if (-5)
                      if ({})
                        if (!true)
                          if (!1)
                            if (!'')
                              // Truthy
                              if (!undefined)
                                // false
                                if (!!' ')
                                  // false
                                  if (!!'')
                                    // true
                                    // true
                                    // true
                                    // false

                                    10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10; // true
10 != 15; // true
10 != '10'; // false
10 !== '10'; // true
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
5 - 5 && 5 + 5; // 0
'Gato' && false; // false
5 >= 5 && 3 < 6; // true
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
5 - 5 || 5 + 5; // 10
'Gato' || false; // Gato
5 >= 5 || 3 < 6; // true
