System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function LogarTempoExecucao(emSegundos = false) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let unidade = 'ms';
                let divisor = 1;
                if (emSegundos) {
                    unidade = 's';
                    divisor = 1000;
                }
                console.log('-----------------------');
                console.log(`Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const resultado = metodoOriginal.apply(this, args);
                console.log(`Resultado do método: ${JSON.stringify(resultado)}`);
                const t2 = performance.now();
                console.log(`${propertyKey} demorou ${(t2 - t1) / divisor} ${unidade}`);
                console.log('-----------------------');
                return resultado;
            };
        };
    }
    exports_1("LogarTempoExecucao", LogarTempoExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
