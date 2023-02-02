<template>
    <div class="content-box">
        <div>
            <breadcrumb />
            <inputDisabled :inline="inline" :form="form" :formLabel="formLabel" />
        </div>
    </div>
</template>
<script>
import inputDisabled from '@/components/input/input-disabled.vue';
import breadcrumb from '@/components/breadcrumb/index.vue';
export default {
    name: 'settlement-detail',
    components: {
        inputDisabled,
        breadcrumb
    },
    data() {
        return {
            inline: true,
            form: {
                city: '', //所属城市
                zone: '', //区
                operatingCompany: '', //运营公司
                marketingCompany: '', //营销公司
                powerStation: '', //电站
                orderStatus: [], //订单状态
                powerStationType: '', //电站类型
                publicScheme: '', //电站类型一级
                secondaryPowerStation: '', //电站类型二级
                electricitySellingMode: '', //售电模式
                includeTestStation: '', //包含测试站
                customerTyp: '', //客户类型
                debitAccountType: '', //扣费账户类型
                orderType: '', //订单类型
                freeOrder: '', //是否免费订单
                chargingStartTime: '', //充电开始时间
                startTime: '', //开始时间
                endTime: '', //结束时间
                qualityStation: '', //是否优质站
                orderNumberFiltering: '', //按订单编号过滤
                keyword: '', //关键字(支持模糊查询)
                equipmentAccessMode: '', //设备接入方式
                startTimeSort: '', //按充电开始时间排序
                publicScheme: '', //公共方案-系统默认
                feeDeductionEnterprise: '', //扣费企业
                frameNumber: '', //车架号
                licensePlateNumber: '', //车牌号
                cardNumber: '', //卡号
                deductionAccount: '', //按扣费账户过滤
                order: '', //订单
                powerStationName: '', //按电站名称排序
                plateNumberSort: '', //按车牌号排序
                chargingStartMode: '', //充电启动方式
                enterpriseName: '' //企业名称
            },
            formLabel: [
                {
                    model: 'powerStation',
                    label: '电站',
                    placeholder: '电站',
                    type: 'disabled'
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'orderStatus',
                    label: '订单状态',
                    placeholder: '订单状态',
                    type: 'select',
                    opts: [
                        {
                            value: '充电完成',
                            label: '充电完成'
                        },
                        {
                            value: '支付成功',
                            label: '支付成功'
                        },
                        {
                            value: '支付失败',
                            label: '支付失败'
                        },
                        {
                            value: '部分支付',
                            label: '部分支付'
                        }
                    ]
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'chargingStartMode',
                    label: '充电启动方式',
                    placeholder: '充电启动方式',
                    type: 'select',
                    opts: [
                        {
                            value: '扫码',
                            label: '扫码'
                        },
                        {
                            value: '刷卡',
                            label: '刷卡'
                        },
                        {
                            value: '车枪识别充（车牌号）',
                            label: '车枪识别充（车牌号）'
                        },
                        {
                            value: '车枪识别充（反向识别）',
                            label: '车枪识别充（反向识别）'
                        },
                        {
                            value: '车枪识别充（互联互通）',
                            label: '车枪识别充（互联互通）'
                        },
                        {
                            value: '车枪识别充（即插即充）',
                            label: '车枪识别充（即插即充）'
                        },
                        {
                            value: '车枪识别充 (VIN)',
                            label: '车枪识别充 (VIN)'
                        },
                        {
                            value: '调度充',
                            label: '调度充'
                        },
                        {
                            value: '调度充 (App)',
                            label: '调度充 (App)'
                        },
                        {
                            value: '开放平台',
                            label: '开放平台'
                        },
                        {
                            value: '选择列表充',
                            label: '选择列表充'
                        },
                        {
                            value: '语音启动',
                            label: '语音启动'
                        },
                        {
                            value: '视频车牌识别充',
                            label: '视频车牌识别充'
                        },
                        {
                            value: '平台控制直接充',
                            label: '平台控制直接充'
                        },
                        {
                            value: '直接充',
                            label: '直接充'
                        },
                        {
                            value: '输入终端编号充',
                            label: '输入终端编号充'
                        },
                        {
                            value: '应急直接充',
                            label: '应急直接充'
                        },
                        {
                            value: 'App应急启动',
                            label: 'App应急启动'
                        },
                        {
                            value: '调度刷卡充',
                            label: '调度刷卡充'
                        },
                        {
                            value: '易通卡充（已废弃）',
                            label: '易通卡充（已废弃）'
                        },
                        {
                            value: '本地控制充（已废弃）',
                            label: '本地控制充（已废弃）'
                        },
                        {
                            value: '支付宝充（已废弃）',
                            label: '支付宝充（已废弃）'
                        },
                        {
                            value: '上海交通卡充（已废弃）',
                            label: '上海交通卡充（已废弃）'
                        },
                        {
                            value: '大众充（已废弃）',
                            label: '大众充（已废弃）'
                        },
                        {
                            value: '终端控制直接充（已废弃）',
                            label: '终端控制直接充（已废弃）'
                        }
                    ]
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'enterpriseName',
                    label: '企业名称',
                    placeholder: '企业名称',
                    type: 'disabled'
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'electricitySellingMode',
                    label: '售电模式',
                    placeholder: '售电模式',
                    type: 'select',
                    opts: [
                        {
                            value: '直售',
                            label: '直售'
                        },
                        {
                            value: '转售',
                            label: '转售'
                        },
                        {
                            value: '代收',
                            label: '代收'
                        },
                        {
                            value: '不收',
                            label: '不收'
                        }
                    ]
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'chargingStartTime',
                    label: '开始时间',
                    placeholder: '开始时间',
                    type: 'select',
                    opts: [
                        {
                            value: '开始时间',
                            label: '开始时间'
                        },
                        {
                            value: '结束时间',
                            label: '结束时间'
                        }
                    ]
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'startTime',
                    label: '开始时间',
                    placeholder: '开始时间',
                    type: 'date'
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'endTime',
                    label: '结束时间',
                    placeholder: '结束时间',
                    type: 'date'
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'keyword',
                    label: '关键字(支持模糊查询)',
                    placeholder: '关键字(支持模糊查询)',
                    type: 'input'
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'startTimeSort',
                    label: '按充电开始时间排序',
                    placeholder: '按充电开始时间排序',
                    type: 'select',
                    opts: [
                        {
                            value: '按充电开始时间排序',
                            label: '按充电开始时间排序'
                        },
                        {
                            value: '按充电结束时间排序',
                            label: '按充电结束时间排序'
                        },
                        {
                            value: '按终端名称排序',
                            label: '按终端名称排序'
                        }
                    ]
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'publicScheme',
                    label: '公共方案-系统默认',
                    placeholder: '公共方案-系统默认',
                    type: 'select',
                    opts: [
                        {
                            value: '公共方案-系统默认',
                            label: '公共方案-系统默认'
                        }
                    ]
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                }
            ]
        };
    },
    created() {},
    computed: {},
    methods: {}
};
</script>
<style lang="less" scoped></style>
