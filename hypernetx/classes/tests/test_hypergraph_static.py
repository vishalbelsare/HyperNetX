import pytest
import numpy as np
import networkx as nx
from hypernetx import Hypergraph, Entity, EntitySet, StaticEntity, StaticEntitySet
from hypernetx import HyperNetXError


def test_static_hypergraph_constructor_setsystem(seven_by_six):
    sbs = seven_by_six
    edict = sbs.edgedict
    h = hnx.Hypergraph(edict, static=True)
    assert isinstance(h.edges, StaticEntitySet)
    assert h.isstatic == True
    assert h.nwhy == False
