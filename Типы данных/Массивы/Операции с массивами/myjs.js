let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Рол');
alert(styles);
styles[ Math.trunc((styles.length - 1) / 2) ] = 'Классика';
alert(styles);
alert( styles.shift() );
styles.unshift('Рэп', 'Регги');
alert(styles);