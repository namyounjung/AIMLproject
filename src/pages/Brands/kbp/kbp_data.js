const data = [{"ds":"2017-05-07","yhat":0.541292236,"month":5,"week":1,"percent":54, "brand": "kbp"},
{"ds":"2017-05-14","yhat":0.543070805,"month":5,"week":2,"percent":54, "brand": "kbp"},
{"ds":"2017-05-21","yhat":0.459344485,"month":5,"week":3,"percent":46, "brand": "kbp"},
{"ds":"2017-05-28","yhat":0.231977621,"month":5,"week":4,"percent":23, "brand": "kbp"},
{"ds":"2017-06-04","yhat":0.027412727,"month":6,"week":1,"percent":3, "brand": "kbp"},
{"ds":"2017-06-11","yhat":-0.005836793,"month":6,"week":2,"percent":-1, "brand": "kbp"},
{"ds":"2017-06-18","yhat":0.026526034,"month":6,"week":3,"percent":3, "brand": "kbp"},
{"ds":"2017-06-25","yhat":0.02012155,"month":6,"week":4,"percent":2, "brand": "kbp"},
{"ds":"2017-07-02","yhat":-0.001759172,"month":7,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2017-07-09","yhat":-0.003866451,"month":7,"week":2,"percent":0, "brand": "kbp"},
{"ds":"2017-07-16","yhat":0.01310926,"month":7,"week":3,"percent":1, "brand": "kbp"},
{"ds":"2017-07-23","yhat":0.018232918,"month":7,"week":4,"percent":2, "brand": "kbp"},
{"ds":"2017-07-30","yhat":0.004795514,"month":7,"week":5,"percent":0, "brand": "kbp"},
{"ds":"2017-08-06","yhat":-0.003508152,"month":8,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2017-08-13","yhat":0.007505679,"month":8,"week":2,"percent":1, "brand": "kbp"},
{"ds":"2017-08-20","yhat":0.019816548,"month":8,"week":3,"percent":2, "brand": "kbp"},
{"ds":"2017-08-27","yhat":0.012027695,"month":8,"week":4,"percent":1, "brand": "kbp"},
{"ds":"2017-09-03","yhat":-0.005301246,"month":9,"week":1,"percent":-1, "brand": "kbp"},
{"ds":"2017-09-10","yhat":-0.003683762,"month":9,"week":2,"percent":0, "brand": "kbp"},
{"ds":"2017-09-17","yhat":0.018190982,"month":9,"week":3,"percent":2, "brand": "kbp"},
{"ds":"2017-09-24","yhat":0.027251681,"month":9,"week":4,"percent":3, "brand": "kbp"},
{"ds":"2017-10-01","yhat":0.009337532,"month":10,"week":1,"percent":1, "brand": "kbp"},
{"ds":"2017-10-08","yhat":-0.020446673,"month":10,"week":2,"percent":-2, "brand": "kbp"},
{"ds":"2017-10-15","yhat":-0.004051624,"month":10,"week":3,"percent":0, "brand": "kbp"},
{"ds":"2017-10-22","yhat":0.040093912,"month":10,"week":4,"percent":4, "brand": "kbp"},
{"ds":"2017-10-29","yhat":0.044643649,"month":10,"week":5,"percent":4, "brand": "kbp"},
{"ds":"2017-11-05","yhat":0.018450842,"month":11,"week":1,"percent":2, "brand": "kbp"},
{"ds":"2017-11-12","yhat":-0.052260137,"month":11,"week":2,"percent":-5, "brand": "kbp"},
{"ds":"2017-11-19","yhat":0.009165258,"month":11,"week":3,"percent":1, "brand": "kbp"},
{"ds":"2017-11-26","yhat":0.251214983,"month":11,"week":4,"percent":25, "brand": "kbp"},
{"ds":"2017-12-03","yhat":0.49954329,"month":12,"week":1,"percent":50, "brand": "kbp"},
{"ds":"2017-12-10","yhat":0.557197512,"month":12,"week":2,"percent":56, "brand": "kbp"},
{"ds":"2017-12-17","yhat":0.517288356,"month":12,"week":3,"percent":52, "brand": "kbp"},
{"ds":"2017-12-24","yhat":0.296359466,"month":12,"week":4,"percent":30, "brand": "kbp"},
{"ds":"2017-12-31","yhat":0.019511814,"month":12,"week":5,"percent":2, "brand": "kbp"},
{"ds":"2018-01-07","yhat":-0.052410542,"month":1,"week":1,"percent":-5, "brand": "kbp"},
{"ds":"2018-01-14","yhat":0.048157905,"month":1,"week":2,"percent":5, "brand": "kbp"},
{"ds":"2018-01-21","yhat":0.071252537,"month":1,"week":3,"percent":7, "brand": "kbp"},
{"ds":"2018-01-28","yhat":0.045097033,"month":1,"week":4,"percent":5, "brand": "kbp"},
{"ds":"2018-02-04","yhat":-0.027478186,"month":2,"week":1,"percent":-3, "brand": "kbp"},
{"ds":"2018-02-11","yhat":-0.018156579,"month":2,"week":2,"percent":-2, "brand": "kbp"},
{"ds":"2018-02-18","yhat":0.047336043,"month":2,"week":3,"percent":5, "brand": "kbp"},
{"ds":"2018-02-25","yhat":0.053912929,"month":2,"week":4,"percent":5, "brand": "kbp"},
{"ds":"2018-03-04","yhat":0.026860968,"month":3,"week":1,"percent":3, "brand": "kbp"},
{"ds":"2018-03-11","yhat":-0.037897593,"month":3,"week":2,"percent":-4, "brand": "kbp"},
{"ds":"2018-03-18","yhat":-0.006215718,"month":3,"week":3,"percent":-1, "brand": "kbp"},
{"ds":"2018-03-25","yhat":0.063159299,"month":3,"week":4,"percent":6, "brand": "kbp"},
{"ds":"2018-04-01","yhat":0.061702588,"month":4,"week":1,"percent":6, "brand": "kbp"},
{"ds":"2018-04-08","yhat":0.024261608,"month":4,"week":2,"percent":2, "brand": "kbp"},
{"ds":"2018-04-15","yhat":-0.072275105,"month":4,"week":3,"percent":-7, "brand": "kbp"},
{"ds":"2018-04-22","yhat":0.039832006,"month":4,"week":4,"percent":4, "brand": "kbp"},
{"ds":"2018-04-29","yhat":0.305990281,"month":4,"week":5,"percent":31, "brand": "kbp"},
{"ds":"2018-05-06","yhat":0.524006748,"month":5,"week":1,"percent":52, "brand": "kbp"},
{"ds":"2018-05-13","yhat":0.545197558,"month":5,"week":2,"percent":55, "brand": "kbp"},
{"ds":"2018-05-20","yhat":0.489553313,"month":5,"week":3,"percent":49, "brand": "kbp"},
{"ds":"2018-05-27","yhat":0.277600092,"month":5,"week":4,"percent":28, "brand": "kbp"},
{"ds":"2018-06-03","yhat":0.057035514,"month":6,"week":1,"percent":6, "brand": "kbp"},
{"ds":"2018-06-10","yhat":-0.011231444,"month":6,"week":2,"percent":-1, "brand": "kbp"},
{"ds":"2018-06-17","yhat":0.024706376,"month":6,"week":3,"percent":2, "brand": "kbp"},
{"ds":"2018-06-24","yhat":0.025349384,"month":6,"week":4,"percent":3, "brand": "kbp"},
{"ds":"2018-07-01","yhat":0.004314952,"month":7,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2018-07-08","yhat":-0.004188988,"month":7,"week":2,"percent":0, "brand": "kbp"},
{"ds":"2018-07-15","yhat":0.011687297,"month":7,"week":3,"percent":1, "brand": "kbp"},
{"ds":"2018-07-22","yhat":0.020565653,"month":7,"week":4,"percent":2, "brand": "kbp"},
{"ds":"2018-07-29","yhat":0.009189372,"month":7,"week":5,"percent":1, "brand": "kbp"},
{"ds":"2018-08-05","yhat":-0.001932601,"month":8,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2018-08-12","yhat":0.006145644,"month":8,"week":2,"percent":1, "brand": "kbp"},
{"ds":"2018-08-19","yhat":0.020327332,"month":8,"week":3,"percent":2, "brand": "kbp"},
{"ds":"2018-08-26","yhat":0.016437694,"month":8,"week":4,"percent":2, "brand": "kbp"},
{"ds":"2018-09-02","yhat":-0.001353775,"month":9,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2018-09-09","yhat":-0.004477481,"month":9,"week":2,"percent":0, "brand": "kbp"},
{"ds":"2018-09-16","yhat":0.015634644,"month":9,"week":3,"percent":2, "brand": "kbp"},
{"ds":"2018-09-23","yhat":0.02958692,"month":9,"week":4,"percent":3, "brand": "kbp"},
{"ds":"2018-09-30","yhat":0.0143963,"month":9,"week":5,"percent":1, "brand": "kbp"},
{"ds":"2018-10-07","yhat":-0.013416992,"month":10,"week":1,"percent":-1, "brand": "kbp"},
{"ds":"2018-10-14","yhat":-0.00888754,"month":10,"week":2,"percent":-1, "brand": "kbp"},
{"ds":"2018-10-21","yhat":0.034559455,"month":10,"week":3,"percent":3, "brand": "kbp"},
{"ds":"2018-10-28","yhat":0.050758649,"month":10,"week":4,"percent":5, "brand": "kbp"},
{"ds":"2018-11-04","yhat":0.026801824,"month":11,"week":1,"percent":3, "brand": "kbp"},
{"ds":"2018-11-11","yhat":-0.036321511,"month":11,"week":2,"percent":-4, "brand": "kbp"},
{"ds":"2018-11-18","yhat":-0.017635454,"month":11,"week":3,"percent":-2, "brand": "kbp"},
{"ds":"2018-11-25","yhat":0.202857056,"month":11,"week":4,"percent":20, "brand": "kbp"},
{"ds":"2018-12-02","yhat":0.466236733,"month":12,"week":1,"percent":47, "brand": "kbp"},
{"ds":"2018-12-09","yhat":0.563936971,"month":12,"week":2,"percent":56, "brand": "kbp"},
{"ds":"2018-12-16","yhat":0.536009885,"month":12,"week":3,"percent":54, "brand": "kbp"},
{"ds":"2018-12-23","yhat":0.348313849,"month":12,"week":4,"percent":35, "brand": "kbp"},
{"ds":"2018-12-30","yhat":0.064085486,"month":12,"week":5,"percent":6, "brand": "kbp"},
{"ds":"2019-01-06","yhat":-0.066603842,"month":1,"week":1,"percent":-7, "brand": "kbp"},
{"ds":"2019-01-13","yhat":0.034403503,"month":1,"week":2,"percent":3, "brand": "kbp"},
{"ds":"2019-01-20","yhat":0.077106948,"month":1,"week":3,"percent":8, "brand": "kbp"},
{"ds":"2019-01-27","yhat":0.053574727,"month":1,"week":4,"percent":5, "brand": "kbp"},
{"ds":"2019-02-03","yhat":-0.011837966,"month":2,"week":1,"percent":-1, "brand": "kbp"},
{"ds":"2019-02-10","yhat":-0.027539004,"month":2,"week":2,"percent":-3, "brand": "kbp"},
{"ds":"2019-02-17","yhat":0.039390492,"month":2,"week":3,"percent":4, "brand": "kbp"},
{"ds":"2019-02-24","yhat":0.060139103,"month":2,"week":4,"percent":6, "brand": "kbp"},
{"ds":"2019-03-03","yhat":0.035724293,"month":3,"week":1,"percent":4, "brand": "kbp"},
{"ds":"2019-03-10","yhat":-0.02442937,"month":3,"week":2,"percent":-2, "brand": "kbp"},
{"ds":"2019-03-17","yhat":-0.017285622,"month":3,"week":3,"percent":-2, "brand": "kbp"},
{"ds":"2019-03-24","yhat":0.05552138,"month":3,"week":4,"percent":6, "brand": "kbp"},
{"ds":"2019-03-31","yhat":0.067164582,"month":3,"week":5,"percent":7, "brand": "kbp"},
{"ds":"2019-04-07","yhat":0.037969683,"month":4,"week":1,"percent":4, "brand": "kbp"},
{"ds":"2019-04-14","yhat":-0.053662808,"month":4,"week":2,"percent":-5, "brand": "kbp"},
{"ds":"2019-04-21","yhat":0.004949998,"month":4,"week":3,"percent":0, "brand": "kbp"},
{"ds":"2019-04-28","yhat":0.257154509,"month":4,"week":4,"percent":26, "brand": "kbp"},
{"ds":"2019-05-05","yhat":0.499370833,"month":5,"week":1,"percent":50, "brand": "kbp"},
{"ds":"2019-05-12","yhat":0.551351464,"month":5,"week":2,"percent":55, "brand": "kbp"},
{"ds":"2019-05-19","yhat":0.513567061,"month":5,"week":3,"percent":51, "brand": "kbp"},
{"ds":"2019-05-26","yhat":0.323089115,"month":5,"week":4,"percent":32, "brand": "kbp"},
{"ds":"2019-06-02","yhat":0.091007031,"month":6,"week":1,"percent":9, "brand": "kbp"},
{"ds":"2019-06-09","yhat":-0.015685807,"month":6,"week":2,"percent":-2, "brand": "kbp"},
{"ds":"2019-06-16","yhat":0.021513579,"month":6,"week":3,"percent":2, "brand": "kbp"},
{"ds":"2019-06-23","yhat":0.029729941,"month":6,"week":4,"percent":3, "brand": "kbp"},
{"ds":"2019-06-30","yhat":0.010246175,"month":6,"week":5,"percent":1, "brand": "kbp"},
{"ds":"2019-07-07","yhat":-0.003700539,"month":7,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2019-07-14","yhat":0.009986321,"month":7,"week":2,"percent":1, "brand": "kbp"},
{"ds":"2019-07-21","yhat":0.022141718,"month":7,"week":3,"percent":2, "brand": "kbp"},
{"ds":"2019-07-28","yhat":0.013597997,"month":7,"week":4,"percent":1, "brand": "kbp"},
{"ds":"2019-08-04","yhat":0.000361084,"month":8,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2019-08-11","yhat":0.005017181,"month":8,"week":2,"percent":1, "brand": "kbp"},
{"ds":"2019-08-18","yhat":0.020169436,"month":8,"week":3,"percent":2, "brand": "kbp"},
{"ds":"2019-08-25","yhat":0.020323096,"month":8,"week":4,"percent":2, "brand": "kbp"},
{"ds":"2019-09-01","yhat":0.003124285,"month":9,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2019-09-08","yhat":-0.004405763,"month":9,"week":2,"percent":0, "brand": "kbp"},
{"ds":"2019-09-15","yhat":0.012875284,"month":9,"week":3,"percent":1, "brand": "kbp"},
{"ds":"2019-09-22","yhat":0.030746236,"month":9,"week":4,"percent":3, "brand": "kbp"},
{"ds":"2019-09-29","yhat":0.01837442,"month":9,"week":5,"percent":2, "brand": "kbp"},
{"ds":"2019-10-06","yhat":-0.006247314,"month":10,"week":1,"percent":-1, "brand": "kbp"},
{"ds":"2019-10-13","yhat":-0.012383203,"month":10,"week":2,"percent":-1, "brand": "kbp"},
{"ds":"2019-10-20","yhat":0.028112263,"month":10,"week":3,"percent":3, "brand": "kbp"},
{"ds":"2019-10-27","yhat":0.054466599,"month":10,"week":4,"percent":5, "brand": "kbp"},
{"ds":"2019-11-03","yhat":0.033603046,"month":11,"week":1,"percent":3, "brand": "kbp"},
{"ds":"2019-11-10","yhat":-0.020354682,"month":11,"week":2,"percent":-2, "brand": "kbp"},
{"ds":"2019-11-17","yhat":-0.038555672,"month":11,"week":3,"percent":-4, "brand": "kbp"},
{"ds":"2019-11-24","yhat":0.156129944,"month":11,"week":4,"percent":16, "brand": "kbp"},
{"ds":"2019-12-01","yhat":0.427297328,"month":12,"week":1,"percent":43, "brand": "kbp"},
{"ds":"2019-12-08","yhat":0.567033301,"month":12,"week":2,"percent":57, "brand": "kbp"},
{"ds":"2019-12-15","yhat":0.546141127,"month":12,"week":3,"percent":55, "brand": "kbp"},
{"ds":"2019-12-22","yhat":0.397003475,"month":12,"week":4,"percent":40, "brand": "kbp"},
{"ds":"2019-12-29","yhat":0.112908369,"month":12,"week":5,"percent":11, "brand": "kbp"},
{"ds":"2020-01-05","yhat":-0.077484841,"month":1,"week":1,"percent":-8, "brand": "kbp"},
{"ds":"2020-01-12","yhat":0.018425503,"month":1,"week":2,"percent":2, "brand": "kbp"},
{"ds":"2020-01-19","yhat":0.079371147,"month":1,"week":3,"percent":8, "brand": "kbp"},
{"ds":"2020-01-26","yhat":0.060369921,"month":1,"week":4,"percent":6, "brand": "kbp"},
{"ds":"2020-02-02","yhat":0.00420821,"month":2,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2020-02-09","yhat":-0.035099294,"month":2,"week":2,"percent":-4, "brand": "kbp"},
{"ds":"2020-02-16","yhat":0.029756788,"month":2,"week":3,"percent":3, "brand": "kbp"},
{"ds":"2020-02-23","yhat":0.064289244,"month":2,"week":4,"percent":6, "brand": "kbp"},
{"ds":"2020-03-01","yhat":0.042199673,"month":3,"week":1,"percent":4, "brand": "kbp"},
{"ds":"2020-03-08","yhat":-0.010338788,"month":3,"week":2,"percent":-1, "brand": "kbp"},
{"ds":"2020-03-15","yhat":-0.026692319,"month":3,"week":3,"percent":-3, "brand": "kbp"},
{"ds":"2020-03-22","yhat":0.045666731,"month":3,"week":4,"percent":5, "brand": "kbp"},
{"ds":"2020-03-29","yhat":0.073485803,"month":3,"week":5,"percent":7, "brand": "kbp"},
{"ds":"2020-04-05","yhat":0.048481319,"month":4,"week":1,"percent":5, "brand": "kbp"},
{"ds":"2020-04-12","yhat":-0.033814426,"month":4,"week":2,"percent":-3, "brand": "kbp"},
{"ds":"2020-04-19","yhat":-0.02428172,"month":4,"week":3,"percent":-2, "brand": "kbp"},
{"ds":"2020-04-26","yhat":0.208050763,"month":4,"week":4,"percent":21, "brand": "kbp"},
{"ds":"2020-05-03","yhat":0.46804593,"month":5,"week":1,"percent":47, "brand": "kbp"},
{"ds":"2020-05-10","yhat":0.558023912,"month":5,"week":2,"percent":56, "brand": "kbp"},
{"ds":"2020-05-17","yhat":0.530640645,"month":5,"week":3,"percent":53, "brand": "kbp"},
{"ds":"2020-05-24","yhat":0.367308475,"month":5,"week":4,"percent":37, "brand": "kbp"},
{"ds":"2020-05-31","yhat":0.128881062,"month":5,"week":5,"percent":13, "brand": "kbp"},
{"ds":"2020-06-07","yhat":-0.018561945,"month":6,"week":1,"percent":-2, "brand": "kbp"},
{"ds":"2020-06-14","yhat":0.017160975,"month":6,"week":2,"percent":2, "brand": "kbp"},
{"ds":"2020-06-21","yhat":0.033022144,"month":6,"week":3,"percent":3, "brand": "kbp"},
{"ds":"2020-06-28","yhat":0.015745766,"month":6,"week":4,"percent":2, "brand": "kbp"},
{"ds":"2020-07-05","yhat":-0.002281316,"month":7,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2020-07-12","yhat":0.008221283,"month":7,"week":2,"percent":1, "brand": "kbp"},
{"ds":"2020-07-19","yhat":0.022954999,"month":7,"week":3,"percent":2, "brand": "kbp"},
{"ds":"2020-07-26","yhat":0.017850756,"month":7,"week":4,"percent":2, "brand": "kbp"},
{"ds":"2020-08-02","yhat":0.00333902,"month":8,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2020-08-09","yhat":0.004298285,"month":8,"week":2,"percent":0, "brand": "kbp"},
{"ds":"2020-08-16","yhat":0.019473505,"month":8,"week":3,"percent":2, "brand": "kbp"},
{"ds":"2020-08-23","yhat":0.023573986,"month":8,"week":4,"percent":2, "brand": "kbp"},
{"ds":"2020-08-30","yhat":0.007963466,"month":8,"week":5,"percent":1, "brand": "kbp"},
{"ds":"2020-09-06","yhat":-0.003397514,"month":9,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2020-09-13","yhat":0.010178464,"month":9,"week":2,"percent":1, "brand": "kbp"},
{"ds":"2020-09-20","yhat":0.03081802,"month":9,"week":3,"percent":3, "brand": "kbp"},
{"ds":"2020-09-27","yhat":0.024460976,"month":9,"week":4,"percent":2, "brand": "kbp"},
{"ds":"2020-10-04","yhat":0.001017727,"month":10,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2020-10-11","yhat":-0.014327939,"month":10,"week":2,"percent":-1, "brand": "kbp"},
{"ds":"2020-10-18","yhat":0.021249867,"month":10,"week":3,"percent":2, "brand": "kbp"},
{"ds":"2020-10-25","yhat":0.055681214,"month":10,"week":4,"percent":6, "brand": "kbp"},
{"ds":"2020-11-01","yhat":0.040959914,"month":11,"week":1,"percent":4, "brand": "kbp"},
{"ds":"2020-11-08","yhat":-0.005071522,"month":11,"week":2,"percent":-1, "brand": "kbp"},
{"ds":"2020-11-15","yhat":-0.053483876,"month":11,"week":3,"percent":-5, "brand": "kbp"},
{"ds":"2020-11-22","yhat":0.112216034,"month":11,"week":4,"percent":11, "brand": "kbp"},
{"ds":"2020-11-29","yhat":0.383946916,"month":11,"week":5,"percent":38, "brand": "kbp"},
{"ds":"2020-12-06","yhat":0.561379968,"month":12,"week":1,"percent":56, "brand": "kbp"},
{"ds":"2020-12-13","yhat":0.552646127,"month":12,"week":2,"percent":55, "brand": "kbp"},
{"ds":"2020-12-20","yhat":0.441112881,"month":12,"week":3,"percent":44, "brand": "kbp"},
{"ds":"2020-12-27","yhat":0.164869132,"month":12,"week":4,"percent":16, "brand": "kbp"},
{"ds":"2021-01-03","yhat":-0.061597684,"month":1,"week":1,"percent":-6, "brand": "kbp"},
{"ds":"2021-01-10","yhat":0.001067295,"month":1,"week":2,"percent":0, "brand": "kbp"},
{"ds":"2021-01-17","yhat":0.077885361,"month":1,"week":3,"percent":8, "brand": "kbp"},
{"ds":"2021-01-24","yhat":0.067597138,"month":1,"week":4,"percent":7, "brand": "kbp"},
{"ds":"2021-01-31","yhat":0.019931832,"month":1,"week":5,"percent":2, "brand": "kbp"},
{"ds":"2021-02-07","yhat":-0.040307423,"month":2,"week":1,"percent":-4, "brand": "kbp"},
{"ds":"2021-02-14","yhat":0.019033927,"month":2,"week":2,"percent":2, "brand": "kbp"},
{"ds":"2021-02-21","yhat":0.06559897,"month":2,"week":3,"percent":7, "brand": "kbp"},
{"ds":"2021-02-28","yhat":0.050123773,"month":2,"week":4,"percent":5, "brand": "kbp"},
{"ds":"2021-03-07","yhat":0.003737872,"month":3,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2021-03-14","yhat":-0.03388043,"month":3,"week":2,"percent":-3, "brand": "kbp"},
{"ds":"2021-03-21","yhat":0.034272041,"month":3,"week":3,"percent":3, "brand": "kbp"},
{"ds":"2021-03-28","yhat":0.077591487,"month":3,"week":4,"percent":8, "brand": "kbp"},
{"ds":"2021-04-04","yhat":0.055501143,"month":4,"week":1,"percent":6, "brand": "kbp"},
{"ds":"2021-04-11","yhat":-0.013720097,"month":4,"week":2,"percent":-1, "brand": "kbp"},
{"ds":"2021-04-18","yhat":-0.047357293,"month":4,"week":3,"percent":-5, "brand": "kbp"},
{"ds":"2021-04-25","yhat":0.160003729,"month":4,"week":4,"percent":16, "brand": "kbp"},
{"ds":"2021-05-02","yhat":0.430899363,"month":5,"week":1,"percent":43, "brand": "kbp"},
{"ds":"2021-05-09","yhat":0.561324598,"month":5,"week":2,"percent":56, "brand": "kbp"},
{"ds":"2021-05-16","yhat":0.540219791,"month":5,"week":3,"percent":54, "brand": "kbp"},
{"ds":"2021-05-23","yhat":0.409103262,"month":5,"week":4,"percent":41, "brand": "kbp"},
{"ds":"2021-05-30","yhat":0.170041196,"month":5,"week":5,"percent":17, "brand": "kbp"},
{"ds":"2021-06-06","yhat":-0.001648238,"month":6,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2021-06-13","yhat":0.011959901,"month":6,"week":2,"percent":1, "brand": "kbp"},
{"ds":"2021-06-20","yhat":0.035030367,"month":6,"week":3,"percent":4, "brand": "kbp"},
{"ds":"2021-06-27","yhat":0.020525876,"month":6,"week":4,"percent":2, "brand": "kbp"},
{"ds":"2021-07-04","yhat":0.000126751,"month":7,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2021-07-11","yhat":0.006608887,"month":7,"week":2,"percent":1, "brand": "kbp"},
{"ds":"2021-07-18","yhat":0.023035849,"month":7,"week":3,"percent":2, "brand": "kbp"},
{"ds":"2021-07-25","yhat":0.021771718,"month":7,"week":4,"percent":2, "brand": "kbp"},
{"ds":"2021-08-01","yhat":0.006910762,"month":8,"week":1,"percent":1, "brand": "kbp"},
{"ds":"2021-08-08","yhat":0.004125201,"month":8,"week":2,"percent":0, "brand": "kbp"},
{"ds":"2021-08-15","yhat":0.018383093,"month":8,"week":3,"percent":2, "brand": "kbp"},
{"ds":"2021-08-22","yhat":0.02610101,"month":8,"week":4,"percent":3, "brand": "kbp"},
{"ds":"2021-08-29","yhat":0.012957841,"month":8,"week":5,"percent":1, "brand": "kbp"},
{"ds":"2021-09-05","yhat":-0.001458177,"month":9,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2021-09-12","yhat":0.007773715,"month":9,"week":2,"percent":1, "brand": "kbp"},
{"ds":"2021-09-19","yhat":0.029921553,"month":9,"week":3,"percent":3, "brand": "kbp"},
{"ds":"2021-09-26","yhat":0.029747917,"month":9,"week":4,"percent":3, "brand": "kbp"},
{"ds":"2021-10-03","yhat":0.008065117,"month":10,"week":1,"percent":1, "brand": "kbp"},
{"ds":"2021-10-10","yhat":-0.014632217,"month":10,"week":2,"percent":-1, "brand": "kbp"},
{"ds":"2021-10-17","yhat":0.014429327,"month":10,"week":3,"percent":1, "brand": "kbp"},
{"ds":"2021-10-24","yhat":0.054589078,"month":10,"week":4,"percent":5, "brand": "kbp"},
{"ds":"2021-10-31","yhat":0.045731624,"month":10,"week":5,"percent":5, "brand": "kbp"},
{"ds":"2021-11-07","yhat":0.008878107,"month":11,"week":1,"percent":1, "brand": "kbp"},
{"ds":"2021-11-14","yhat":-0.062555718,"month":11,"week":2,"percent":-6, "brand": "kbp"},
{"ds":"2021-11-21","yhat":0.072112127,"month":11,"week":3,"percent":7, "brand": "kbp"},
{"ds":"2021-11-28","yhat":0.337463481,"month":11,"week":4,"percent":34, "brand": "kbp"},
{"ds":"2021-12-05","yhat":0.547224298,"month":12,"week":1,"percent":55, "brand": "kbp"},
{"ds":"2021-12-12","yhat":0.559296175,"month":12,"week":2,"percent":56, "brand": "kbp"},
{"ds":"2021-12-19","yhat":0.479403695,"month":12,"week":3,"percent":48, "brand": "kbp"},
{"ds":"2021-12-26","yhat":0.218665113,"month":12,"week":4,"percent":22, "brand": "kbp"},
{"ds":"2022-01-02","yhat":-0.031982693,"month":1,"week":1,"percent":-3, "brand": "kbp"},
{"ds":"2022-01-09","yhat":-0.016759027,"month":1,"week":2,"percent":-2, "brand": "kbp"},
{"ds":"2022-01-16","yhat":0.072620693,"month":1,"week":3,"percent":7, "brand": "kbp"},
{"ds":"2022-01-23","yhat":0.071357862,"month":1,"week":4,"percent":7, "brand": "kbp"},
{"ds":"2022-01-30","yhat":0.034544347,"month":1,"week":5,"percent":3, "brand": "kbp"},
{"ds":"2022-02-06","yhat":-0.04121852,"month":2,"week":1,"percent":-4, "brand": "kbp"},
{"ds":"2022-02-13","yhat":0.007831042,"month":2,"week":2,"percent":1, "brand": "kbp"},
{"ds":"2022-02-20","yhat":0.064050028,"month":2,"week":3,"percent":6, "brand": "kbp"},
{"ds":"2022-02-27","yhat":0.055415713,"month":2,"week":4,"percent":6, "brand": "kbp"},
{"ds":"2022-03-06","yhat":0.01712225,"month":3,"week":1,"percent":2, "brand": "kbp"},
{"ds":"2022-03-13","yhat":-0.038460988,"month":3,"week":2,"percent":-4, "brand": "kbp"},
{"ds":"2022-03-20","yhat":0.022028954,"month":3,"week":3,"percent":2, "brand": "kbp"},
{"ds":"2022-03-27","yhat":0.078081326,"month":3,"week":4,"percent":8, "brand": "kbp"},
{"ds":"2022-04-03","yhat":0.063278519,"month":4,"week":1,"percent":6, "brand": "kbp"},
{"ds":"2022-04-10","yhat":0.005643046,"month":4,"week":2,"percent":1, "brand": "kbp"},
{"ds":"2022-04-17","yhat":-0.064034005,"month":4,"week":3,"percent":-6, "brand": "kbp"},
{"ds":"2022-04-24","yhat":0.11423971,"month":4,"week":4,"percent":11, "brand": "kbp"},
{"ds":"2022-05-01","yhat":0.388936763,"month":5,"week":1,"percent":39, "brand": "kbp"},
{"ds":"2022-05-08","yhat":0.556633293,"month":5,"week":2,"percent":56, "brand": "kbp"},
{"ds":"2022-05-15","yhat":0.546954955,"month":5,"week":3,"percent":55, "brand": "kbp"},
{"ds":"2022-05-22","yhat":0.447307164,"month":5,"week":4,"percent":45, "brand": "kbp"},
{"ds":"2022-05-29","yhat":0.21368439,"month":5,"week":5,"percent":21, "brand": "kbp"},
{"ds":"2022-06-05","yhat":0.020539252,"month":6,"week":1,"percent":2, "brand": "kbp"},
{"ds":"2022-06-12","yhat":0.006293978,"month":6,"week":2,"percent":1, "brand": "kbp"},
{"ds":"2022-06-19","yhat":0.035603954,"month":6,"week":3,"percent":4, "brand": "kbp"},
{"ds":"2022-06-26","yhat":0.025387685,"month":6,"week":4,"percent":3, "brand": "kbp"},
{"ds":"2022-07-03","yhat":0.00350344,"month":7,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2022-07-10","yhat":0.005347484,"month":7,"week":2,"percent":1, "brand": "kbp"},
{"ds":"2022-07-17","yhat":0.022446296,"month":7,"week":3,"percent":2, "brand": "kbp"},
{"ds":"2022-07-24","yhat":0.025189457,"month":7,"week":4,"percent":3, "brand": "kbp"},
{"ds":"2022-07-31","yhat":0.010936717,"month":7,"week":5,"percent":1, "brand": "kbp"},
{"ds":"2022-08-07","yhat":0.004589784,"month":8,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2022-08-14","yhat":0.017054456,"month":8,"week":2,"percent":2, "brand": "kbp"},
{"ds":"2022-08-21","yhat":0.027851488,"month":8,"week":3,"percent":3, "brand": "kbp"},
{"ds":"2022-08-28","yhat":0.017891839,"month":8,"week":4,"percent":2, "brand": "kbp"},
{"ds":"2022-09-04","yhat":0.001350077,"month":9,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2022-09-11","yhat":0.00586358,"month":9,"week":2,"percent":1, "brand": "kbp"},
{"ds":"2022-09-18","yhat":0.028222878,"month":9,"week":3,"percent":3, "brand": "kbp"},
{"ds":"2022-09-25","yhat":0.033979293,"month":9,"week":4,"percent":3, "brand": "kbp"},
{"ds":"2022-10-02","yhat":0.014542721,"month":10,"week":1,"percent":1, "brand": "kbp"},
{"ds":"2022-10-09","yhat":-0.013293612,"month":10,"week":2,"percent":-1, "brand": "kbp"},
{"ds":"2022-10-16","yhat":0.008082231,"month":10,"week":3,"percent":1, "brand": "kbp"},
{"ds":"2022-10-23","yhat":0.051484427,"month":10,"week":4,"percent":5, "brand": "kbp"},
{"ds":"2022-10-30","yhat":0.049562045,"month":10,"week":5,"percent":5, "brand": "kbp"},
{"ds":"2022-11-06","yhat":0.020970818,"month":11,"week":1,"percent":2, "brand": "kbp"},
{"ds":"2022-11-13","yhat":-0.052774416,"month":11,"week":2,"percent":-5, "brand": "kbp"},
{"ds":"2022-11-20","yhat":0.03665375,"month":11,"week":3,"percent":4, "brand": "kbp"},
{"ds":"2022-11-27","yhat":0.289191959,"month":11,"week":4,"percent":29, "brand": "kbp"},
{"ds":"2022-12-04","yhat":0.52508117,"month":12,"week":1,"percent":53, "brand": "kbp"},
{"ds":"2022-12-11","yhat":0.560743981,"month":12,"week":2,"percent":56, "brand": "kbp"},
{"ds":"2022-12-18","yhat":0.510821233,"month":12,"week":3,"percent":51, "brand": "kbp"},
{"ds":"2022-12-25","yhat":0.272912528,"month":12,"week":4,"percent":27, "brand": "kbp"},
{"ds":"2023-01-01","yhat":0.003919149,"month":1,"week":1,"percent":0, "brand": "kbp"},
{"ds":"2023-01-08","yhat":-0.034032028,"month":1,"week":2,"percent":-3, "brand": "kbp"},
{"ds":"2023-01-15","yhat":0.063766537,"month":1,"week":3,"percent":6, "brand": "kbp"},
{"ds":"2023-01-22","yhat":0.07634144,"month":1,"week":4,"percent":8, "brand": "kbp"},
{"ds":"2023-01-29","yhat":0.047317985,"month":1,"week":5,"percent":5, "brand": "kbp"},
{"ds":"2023-02-05","yhat":-0.027658458,"month":2,"week":1,"percent":-3, "brand": "kbp"},
{"ds":"2023-02-12","yhat":-0.00318601,"month":2,"week":2,"percent":0, "brand": "kbp"},
{"ds":"2023-02-19","yhat":0.059796609,"month":2,"week":3,"percent":6, "brand": "kbp"},
{"ds":"2023-02-26","yhat":0.05849371,"month":2,"week":4,"percent":6, "brand": "kbp"},
{"ds":"2023-03-05","yhat":0.029199868,"month":3,"week":1,"percent":3, "brand": "kbp"},
{"ds":"2023-03-12","yhat":-0.036704747,"month":3,"week":2,"percent":-4, "brand": "kbp"},
{"ds":"2023-03-19","yhat":0.009675502,"month":3,"week":3,"percent":1, "brand": "kbp"},
{"ds":"2023-03-26","yhat":0.075149219,"month":3,"week":4,"percent":8, "brand": "kbp"},
{"ds":"2023-04-02","yhat":0.068845729,"month":4,"week":1,"percent":7, "brand": "kbp"},
{"ds":"2023-04-09","yhat":0.023411012,"month":4,"week":2,"percent":2, "brand": "kbp"},
{"ds":"2023-04-16","yhat":-0.073712663,"month":4,"week":3,"percent":-7, "brand": "kbp"},
{"ds":"2023-04-23","yhat":0.071900806,"month":4,"week":4,"percent":7, "brand": "kbp"},
{"ds":"2023-04-30","yhat":0.343322159,"month":4,"week":5,"percent":34, "brand": "kbp"},
{"ds":"2023-05-07","yhat":0.544009055,"month":5,"week":1,"percent":54, "brand": "kbp"},
{"ds":"2023-05-14","yhat":0.553416294,"month":5,"week":2,"percent":55, "brand": "kbp"},
{"ds":"2023-05-21","yhat":0.480833025,"month":5,"week":3,"percent":48, "brand": "kbp"}];

  export default data;