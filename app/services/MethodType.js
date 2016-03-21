import { Enum } from 'enumify'

export default class MethodType extends Enum {}
MethodType.initEnum(['GET', 'PUT', 'POST', 'DELETE'])

