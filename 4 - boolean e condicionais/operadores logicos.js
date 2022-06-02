// Falsy
if (false)
  if (0)
    if (NaN)
      // ou -0
      if (null)
        if (undefined)
          if ('')
            if (true)
              // ou "" ou ``

              // Truthy
              if (1)
                if (' ')
                  if ('andre')
                    if (-5)
                      if ({})
                        if (!true)
                          // Truthy
                          if (!1)
                            // false
                            if (!'')
                              // false
                              if (!undefined)
                                // true
                                if (!!' ')
                                  // true
                                  if (!!'')
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
