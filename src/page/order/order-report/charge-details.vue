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
    name: 'charge-details',
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
                plateNumberSort: '' //按车牌号排序
            },
            formLabel: [
                {
                    model: 'city',
                    label: '所属城市',
                    placeholder: '所属城市',
                    type: 'disabled'
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'zone',
                    label: '区',
                    placeholder: '区',
                    type: 'disabled'
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'operatingCompany',
                    label: '运营公司',
                    placeholder: '运营公司',
                    type: 'disabled'
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'powerStation',
                    label: '电站',
                    placeholder: '电站',
                    type: 'disabled'
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'marketingCompany',
                    label: '营销公司',
                    placeholder: '营销公司',
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
                    model: 'powerStationType',
                    label: '电站类型',
                    placeholder: '电站类型',
                    type: 'select',
                    opts: [
                        {
                            value: '驻地站',
                            label: '驻地站'
                        },
                        {
                            value: '公共站',
                            label: '公共站'
                        },
                        {
                            value: '专用站',
                            label: '专用站'
                        },
                        {
                            value: '个人桩',
                            label: '个人桩'
                        },
                        {
                            value: '复用站',
                            label: '复用站'
                        }
                    ]
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'secondaryPowerStation',
                    label: '电站二级',
                    placeholder: '电站二级',
                    type: 'select',
                    opts: [
                        {
                            value: '标准公共快充站',
                            label: '标准公共快充站'
                        },
                        {
                            value: '小型公共快充站',
                            label: '小型公共快充站'
                        },
                        {
                            value: '目的地站',
                            label: '目的地站'
                        },
                        {
                            value: '居民小区站',
                            label: '居民小区站'
                        },
                        {
                            value: '园区驻地站',
                            label: '园区驻地站'
                        },
                        {
                            value: '公交专用站',
                            label: '公交专用站'
                        },
                        {
                            value: '非公交专用站',
                            label: '非公交专用站'
                        },
                        {
                            value: '公交复用站',
                            label: '公交复用站'
                        },
                        {
                            value: '非公交复用站',
                            label: '非公交复用站'
                        },
                        {
                            value: '个人共享站',
                            label: '个人共享站'
                        },
                        {
                            value: '未分类',
                            label: '未分类'
                        }
                    ]
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
                    model: 'includeTestStation',
                    label: '包含测试站',
                    placeholder: '包含测试站',
                    type: 'select',
                    opts: [
                        {
                            value: '仅测试站',
                            label: '仅测试站'
                        },
                        {
                            value: '不包含测试站',
                            label: '不包含测试站'
                        }
                    ]
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'customerTyp',
                    label: '客户类型',
                    placeholder: '客户类型',
                    type: 'select',
                    opts: [
                        {
                            value: '普通个人用户',
                            label: '普通个人用户'
                        },
                        {
                            value: '企业用户',
                            label: '企业用户'
                        }
                    ]
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'debitAccountType',
                    label: '扣费账户类型',
                    placeholder: '扣费账户类型',
                    type: 'select',
                    opts: [
                        {
                            value: '个人',
                            label: '个人'
                        },
                        {
                            value: '企业',
                            label: '企业'
                        }
                    ]
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'orderType',
                    label: '订单类型',
                    placeholder: '订单类型',
                    type: 'select',
                    opts: [
                        {
                            value: '充电订单',
                            label: '充电订单'
                        },
                        {
                            value: '地锁订单',
                            label: '地锁订单'
                        },
                        {
                            value: '预约订单',
                            label: '预约订单'
                        },
                        {
                            value: '超时占用订单',
                            label: '超时占用订单'
                        }
                    ]
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'freeOrder',
                    label: '是否免费订单',
                    placeholder: '是否免费订单',
                    type: 'select',
                    opts: [
                        {
                            value: '是',
                            label: '是'
                        },
                        {
                            value: '否',
                            label: '否'
                        }
                    ]
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'chargingStartTime',
                    label: '充电开始时间',
                    placeholder: '充电开始时间',
                    type: 'select',
                    opts: [
                        {
                            value: '充电开始时间',
                            label: '充电开始时间'
                        },
                        {
                            value: '充电结束时间',
                            label: '充电结束时间'
                        },
                        {
                            value: '收款时间',
                            label: '收款时间'
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
                    model: 'qualityStation',
                    label: '是否优质站',
                    placeholder: '是否优质站',
                    type: 'select',
                    opts: [
                        {
                            value: '是',
                            label: '是'
                        },
                        {
                            value: '否',
                            label: '否'
                        }
                    ]
                    // rule: [{ quired: true, message: '', trigger: 'blur' }]
                },
                {
                    model: 'orderNumberFiltering',
                    label: '按订单编号过滤',
                    placeholder: '按订单编号过滤',
                    type: 'select',
                    opts: [
                        {
                            value: '按订单编号过滤',
                            label: '按订单编号过滤'
                        },
                        {
                            value: '按终端名称过滤',
                            label: '按终端名称过滤'
                        },
                        {
                            value: '按终客户编号过滤',
                            label: '按终客户编号过滤'
                        },
                        {
                            value: '按终手机号过滤',
                            label: '按终手机号过滤'
                        },
                        {
                            value: '按终昵称过滤',
                            label: '按终昵称过滤'
                        },
                        {
                            value: '按终企业编码过滤',
                            label: '按终企业编码过滤'
                        },
                        {
                            value: '按终企业名称过滤',
                            label: '按终企业名称过滤'
                        },
                        {
                            value: '按终卡号过滤',
                            label: '按终卡号过滤'
                        },
                        {
                            value: '按终使用人过滤',
                            label: '按终使用人过滤'
                        },
                        {
                            value: '按终车架号过滤',
                            label: '按终车架号过滤'
                        },
                        {
                            value: '按终车牌号过滤',
                            label: '按终车牌号过滤'
                        },
                        {
                            value: '按发动机号过滤',
                            label: '按发动机号过滤'
                        },
                        {
                            value: '按企业车辆自编号过滤',
                            label: '按企业车辆自编号过滤'
                        },
                        {
                            value: '按终端编号过滤',
                            label: '按终端编号过滤'
                        },
                        {
                            value: '按扣费企业编码过滤',
                            label: '按扣费企业编码过滤'
                        }
                    ]
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
                    model: 'equipmentAccessMode',
                    label: '设备接入方式',
                    placeholder: '设备接入方式',
                    type: 'select',
                    opts: [
                        {
                            value: '盒子',
                            label: '盒子'
                        },
                        {
                            value: '互联互通',
                            label: '互联互通'
                        },
                        {
                            value: '不包含盒子与互联互通',
                            label: '不包含盒子与互联互通'
                        }
                    ]
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
